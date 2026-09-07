---
name: zentropi-labeler
description: >
  Build, test, optimize, and run content classifiers ("labelers") with
  Zentropi's CoPE model through the unified `zentropi-labeler` CLI. Use to create
  labelers from plain-English policies, manage test datasets,
  benchmark accuracy (precision/recall/F1), run AI-assisted optimization,
  use community labelers, and classify text or images — one item or
  at production volume.
metadata:
  author: zentropi
  version: "0.11.1"
license: See https://zentropi.ai/legal/terms
---

# Zentropi

Zentropi helps you build classifiers that follow your own plain-English policies. A classifier is called a **labeler**: a named policy you author,
test, and improve, then run against real content. Labels are binary —
`1` = the policy criteria were detected, `0` = they were not — returned
with a confidence score.

Everything in this skill is done through one command-line tool: **`zentropi-labeler`**.
The CLI is a single unified interface over the whole Zentropi platform, inclusive of both the labeler creation tools and inference engine.

## When to Use

- Create, edit, or version a labeler from plain-English criteria
- Build and manage a test dataset, then **benchmark** a labeler's accuracy
- **Optimize** a labeler with AI-suggested criteria improvements
- **Deploy** any labeler for production-scale usage
- **Classify** content (text or visual content) — a single item or production volume

Do NOT use for:
- Use cases that need more than a binary (1/0) label
- Creating classifiers that emit multiple labels

## The mental model: one tool, two intents

The commands split by **what you're doing**:

- **Building Labelers** — `create`/`list`/`get`/`update`/`delete`, `versions`,
  `tests`, `check`, `benchmark`, `optimize`, `deploy`/`undeploy`, `fork`, `star`.
  These are for creating and refining a labeler. They are meant **for development**,
  not high throughput.
- **Running Labelers** — `run`. This is for classifying live content, including at
  production volume. Once you are satisfied with a labeler, **deploy a version** and use `run` for real traffic.

The typical lifecycle:

```
create labeler ──> add test samples ──> check / benchmark ──> optimize
       └──────────────> deploy a version ──────────────> run (production)
```

## Prerequisites

### 1. The CLI

The `zentropi-labeler` CLI ships **inside this skill** at `scripts/zentropi-labeler` — there is
nothing to install. It's a self-contained script with [`uv`](https://docs.astral.sh/uv/)
inline metadata, so the first run fetches its one dependency (`httpx`) into a
cached environment and every run after is instant. You only need `uv` on PATH.

The script lives next to this `SKILL.md`, in `scripts/zentropi-labeler`. Point a
variable at its absolute path and run it from there:

```bash
# Run from this skill's own directory (where SKILL.md lives):
ZENTROPI="$(pwd)/scripts/zentropi-labeler"
"$ZENTROPI" --version          # self-bootstraps uv on first run
```

For readability, **every example below is written as `zentropi-labeler ...`** — that
name refers to the bundled `scripts/zentropi-labeler`. Invoke it by path: use
`"$ZENTROPI" ...` when you set the variable in the same shell, or the script's
full path. In an *interactive* shell you can `alias zentropi-labeler="$ZENTROPI"` to run
the examples verbatim, but **aliases do not expand in non-interactive shells**
(scripts, automation, agents), so there always call the script by its path.

Update the CLI by re-downloading the agent skill (see [Staying Up to Date](#staying-up-to-date)).

### 2. An API key

A Zentropi API key (starts with `zt_`) is required. The user must sign up
at https://zentropi.ai and create a key in their account settings.

The CLI finds the key in this order: `--api-key` flag → `ZENTROPI_API_KEY`
environment variable → the key saved by `zentropi-labeler login`.

**Check whether a key is available:**

```bash
echo ${ZENTROPI_API_KEY:+"API key is set"}
```

If none is set, either export it or log in:

```bash
export ZENTROPI_API_KEY="zt_..."     # preferred for agents/CI
zentropi-labeler login                        # interactive; prompts for the key securely
```

Do NOT proceed with commands until a key is available.

**NEVER hardcode the key** in scripts. Use `ZENTROPI_API_KEY` or
 `zentropi-labeler login`.

## Key Directives

1. **Always pass `--json` when running programmatically** and parse stdout.
   Management commands (`list`, `get`, `create`, etc.) print a human-readable
   summary by default and give stable, structured output with `--json`. `run`
   (and `run --batch`) are for machines and **always emit JSON**, with or
   without the flag.
2. **Interpret labels correctly** — `1` means the policy condition WAS
   detected; `0` means it was NOT. What "detected" means depends entirely on
   the policy you wrote.
3. **Write good policies/criteria** — see
   `references/policy-writing-guide.md`. One topic per labeler; specific,
   observable criteria with explicit inclusions and exclusions.
4. **Check exit codes** — `0` success, `2` no key found, `3` authentication
   failed, `1` other error. Don't confuse exit codes with label results.

## Command Reference

Global flags (before the subcommand): `--json` (raw JSON output),
`--api-key KEY` (override the key for one call).

| Command | What it does |
|---|---|
| `login [key]` | Save an API key. Omit `key` to be prompted securely (recommended). |
| `logout` | Remove the saved key. |
| `account` | Show account info for the current key. |
| `list [--skip N] [--limit N]` | List your labelers. |
| `get <labeler_id>` | Show one labeler. |
| `create [--name] [--description] [--criteria TEXT] [--visibility public\|private]` | Create a labeler. `--criteria` sets the draft policy. |
| `update <labeler_id> [--name] [--description] [--criteria] [--visibility]` | Update a labeler's draft. |
| `delete <labeler_id>` | Delete a labeler. |
| `deploy <labeler_id> [--version <version_id>]` | Make the labeler live for production. Default deploys the current draft (snapshotting it); `--version` deploys an existing version. |
| `undeploy <labeler_id> [--version <version_id>]` | Take the labeler offline. Default undeploys all deployed versions; `--version` undeploys a specific one. |
| `versions list <labeler_id>` | List a labeler's versions. |
| `versions get <labeler_id> <version_id>` | Show one version. |
| `versions create <labeler_id> [--criteria TEXT] [--version-name] [--description]` | Snapshot a new version. With `--criteria`, snapshots that text; omit it to snapshot the **current draft** (the natural way to save a version). Use `deploy` to make it live. |
| `versions delete <labeler_id> <version_id>` | Delete a version. |
| `tests list <labeler_id>` | List test samples. |
| `tests get <labeler_id> <test_id>` | Show one test sample. |
| `tests create <labeler_id> (--file data.json \| --text TEXT [--label 0\|1])` | Add test samples from a JSON file or a single inline sample. |
| `tests import <labeler_id> --csv data.csv [--dry-run]` | Bulk-import test samples from a CSV (mirrors the web upload). Media columns accept http(s) URLs or local file paths. See [CSV import](#csv-import-tests-import). |
| `tests delete <labeler_id> <test_id>` | Delete one test sample. |
| `tests delete-all <labeler_id>` | Delete all test samples. |
| `benchmark <labeler_id> [--version draft\|latest\|<version_id>]` | Run the labeler over its stored test set; streams per-sample results then a summary. Defaults to your `draft`. |
| `optimize start <labeler_id> [--tier basic\|pro\|guru] [--version draft\|latest\|<version_id>]` | Start an AI-powered optimization job (default `--tier pro`, `--version draft`). Requires a subscription. See [Optimizer tiers](#optimizer-tiers). |
| `optimize status <labeler_id> [job_id]` | Poll a job (defaults to `latest`). |
| `optimize discard <labeler_id> <job_id>` | Discard a job's suggestion. |
| `fork <labeler_id> [--name] [--version] [--visibility] [--clone-tests]` | Fork/remix a labeler (default `--version latest`). |
| `star <labeler_id> [--status]` | Star/unstar a labeler, or show status with `--status`. |
| `check <labeler_id> [--text TEXT] [--image SRC] [--video SRC] [--version draft\|latest\|<version_id>]` | Spot-check the labeler on ad-hoc content **without saving it**. `SRC` is a data URL, remote URL, or local file path (CLI encodes it). Defaults to your `draft` (or `latest` deployed if community labeler). Returns the same `label` field as `run`. |
| `run [labeler_id] [--criteria TEXT] [--text TEXT] [--image SRC] [--video SRC] [--batch FILE] [--version <labeler_version_id>\|latest] [--model cope-latest]` | Classify live content. Pass a `labeler_id` (which defaults to the `latest` deployed version unless a `version_id` is specified). Alternatively, omit `labeler_id` and pass `--criteria` to label against ad-hoc policy text with no labeler. `SRC` is a data URL, remote URL, or local file path (CLI encodes it). For many items at once, pass `--batch <file.jsonl\|file.csv>` (parallel, with retries) — see [Batch labeling](#batch-labeling-run---batch). Always returns JSON. Rate limits apply. |

## Quickstart

The whole loop, end to end:

```bash
zentropi-labeler login                                              # store your zt_ API key

# 1. Create a labeler. This saves a *draft* (nothing is deployed yet).
zentropi-labeler create --name "puns" --criteria "Label puns"
#   -> note the returned labeler_id

# 2. Spot-check the draft on ad-hoc content, without saving anything.
zentropi-labeler check <labeler_id> --text "What do you call a fake noodle? An impasta."

# 3. Happy with it? Deploy the draft to make it live.
zentropi-labeler deploy <labeler_id>

# 4. Run production inference against the deployed version.
zentropi-labeler run <labeler_id> --text "I would tell you a chemistry joke but I know I wouldn't get a reaction."
```

For a one-off classification with no labeler at all, omit the `labeler_id` and
pass `--criteria` with the policy text directly (nothing is saved):

```bash
zentropi-labeler run --criteria "Label puns" --text "I wondered why the baseball kept getting bigger. Then it hit me."
```

The sections below cover custom labeler creation in depth — Build, Test, Optimize, Deploy, and Run.

## Create a Custom Labeler

### A. Initialize a labeler

A labeler is just a name plus a **policy** — the criteria text that says what to
detect. Create one with a starting policy:

```bash
zentropi-labeler --json create \
  --name "Hostile language" \
  --criteria "Detect hostile language directed at conversation participants, including insults, threats, belittling, or aggressive confrontation. Exclude criticism of ideas, products, or public figures." \
  --visibility private
# -> note the returned "id" (the labeler_id)
```

The criteria you pass is saved as the **draft** — your working copy. Edit it any
time with `update`; this changes only the draft, never production:

```bash
zentropi-labeler update <labeler_id> --criteria "<your revised policy text>"
```

See the policy guide for how to write effective criteria. Next, test the draft
(section B), then deploy it (section D).

### B. Test your labeler

Three ways to test, from quickest to most thorough.

**1. Spot-check** one piece of content without saving anything. Defaults to your
draft:

```bash
zentropi-labeler check <labeler_id> --text "You're an idiot and nobody likes you"
```

**2. Build a test dataset** of labeled examples so you can measure accuracy:

```bash
zentropi-labeler tests create <labeler_id> --file dataset.json
```

**Test dataset file format** (`--file`): a JSON array of samples. Each needs
`expected_label` of `"0"` or `"1"`, plus one of `content_text`, `content_image`,
or `content_video`:

```json
[
  {"content_text": "You're an idiot and nobody likes you", "expected_label": "1"},
  {"content_text": "The weather is nice today", "expected_label": "0"},
  {"content_text": "I disagree with this proposal", "expected_label": "0"}
]
```

**Image / video test samples**: supply `content_image` or `content_video` as a
base64 **data URL** (e.g. `data:image/jpeg;base64,...`); the server uploads it to
storage. Adding image or video
samples requires a **paid subscription** (you'll get a `403` otherwise).

```json
[
  {"content_image": "data:image/jpeg;base64,/9j/4AAQ...", "expected_label": "1"},
  {"content_video": "data:video/mp4;base64,AAAAIGZ0...", "expected_label": "0"}
]
```

#### CSV import (`tests import`)

`tests create --file` needs media pre-encoded as data URLs, which is awkward if
you just have a list of media URLs. `tests import --csv` allows you instead to
point at a CSV that carries media as plain URLs (or local file paths) and the CLI
downloads/encodes each one for you before uploading.

```bash
zentropi-labeler tests import <labeler_id> --csv tests.csv
zentropi-labeler tests import <labeler_id> --csv tests.csv --dry-run   # validate only
```

Recognized columns (same as the web upload):

```csv
content_text,content_image_url,content_video_url,expected_label,sample_id
"a friendly hello",,,0,greet-1
,https://example.com/cat.jpg,,1,img-1
,,./clips/welcome.mp4,1,vid-1
```

- `expected_label` is required on every row and must be `0` or `1`.
- Each row needs at least one of `content_text`, `content_image_url`,
  `content_video_url`; blank rows are skipped. `sample_id` is optional.
- Media columns accept an `http(s)` URL **or a local file path** — the CLI does
  the download/read and embeds the result as a data URL. Requires a subscription.
- If a single URL fails to download, that row is skipped (or kept as text-only if
  it also has `content_text`) and the rest continue; a summary lists skipped rows.
- `--dry-run` validates structure and prints counts without downloading or
  uploading anything.

**3. Benchmark** the labeler over the whole dataset to get accuracy metrics:

```bash
zentropi-labeler benchmark <labeler_id> --version draft
```

`benchmark` streams one line per sample, then a summary. With `--json` you
get an array of events; the final summary event looks like:

```json
{
  "type": "summary",
  "num_samples": 50, "num_scored": 50, "num_errored": 0,
  "tp": 18, "fp": 3, "tn": 27, "fn": 2,
  "precision": 0.857, "recall": 0.900, "f1": 0.878, "accuracy": 0.900
}
```

- **precision** — of the items labeled `1`, how many were truly `1`.
- **recall** — of the truly-`1` items, how many were caught.
- **f1** — harmonic mean of the two; the single headline number.
- Metrics are computed on binary labels only (`0`/`1`).

Low F1 usually means the policy is vague — refine the criteria (see the policy
guide) and re-benchmark, or run optimization (section C).

### C. Optimize your labeler

> Running optimizers through the API/CLI requires an active **subscription**.
> Keys without one get a `402` response.

```bash
# 1. Start a job against the current draft (default --tier pro).
zentropi-labeler --json optimize start <labeler_id> --version draft
# -> returns a job_id; status is "pending"

# 2. Poll until status is "completed" (or "failed"). Once a minute is sufficient.
zentropi-labeler --json optimize status <labeler_id> <job_id>
```

**Optimizer tiers** (`--tier`, default `pro`) set how much effort the optimizer
spends. These match the tiers in the web UI. The times are approximate, not a
wall-clock guarantee — runs often finish sooner.

| Tier | What it does | Roughly |
| --- | --- | --- |
| `basic` | Reformat your labeling criteria. | ~2 min |
| `pro` | Tune to fit your tests. | ~10 min |
| `guru` | Deeply tune with analysis. | ~30 min |

Note: `metric_deltas`, `label_deltas`, and per-sample review only populate at
`pro` or `guru` (they need the deeper analysis). `basic` returns improved
criteria without them.

A completed job returns **structured** results:

- `suggested_criteria` — the improved policy (markdown).
- `metric_deltas` — before/after accuracy changes, as a JSON object.
- `criteria_deltas` — JSON array explaining suggested changes.
- `label_deltas` — JSON array that flags tests the optimizer thinks you may
  have **mislabeled** in your own dataset.

> **Tip — clean your dataset with `label_deltas`.** This is one of the most
> useful outputs: it surfaces test samples whose stored label likely disagrees
> with the policy, so you can find and fix labeling mistakes in your test set.
> If you care about dataset quality, review `label_deltas` after every `pro` or
> `guru` job.

If the suggestion is good, save it to the draft and deploy it (see **D. Deploy**):

```bash
zentropi-labeler update <labeler_id> --criteria "<paste suggested_criteria>"
zentropi-labeler deploy <labeler_id>
```

Otherwise discard it: `zentropi-labeler optimize discard <labeler_id> <job_id>`.

### D. Deploy your labeler

A new labeler — and any edits you make to it — lives as a **draft** until you
deploy. `check` and `benchmark` can run a draft, but `run` only runs the
**deployed** version, so you must deploy before you can `run`.

`deploy` makes a version live. By default it snapshots your current
draft and deploys that snapshot — you don't have to create a version yourself:

```bash
# Deploy the current draft (snapshots it, makes it live).
zentropi-labeler deploy <labeler_id>

# See your versions and which ones are live.
zentropi-labeler --json versions list <labeler_id>
```

To go live with a specific existing version instead of the draft — for example
to roll back, or to promote a version you made with `versions create` (or the
`suggested_criteria` from an optimize job, section C) — pass `--version`:

```bash
# Promote / roll back to an existing version.
zentropi-labeler deploy <labeler_id> --version <version_id>
```

Take a labeler offline with `undeploy`. By default it undeploys all currently
deployed versions; pass `--version` to undeploy a specific one. After
undeploying, `run` errors until you deploy again:

```bash
zentropi-labeler undeploy <labeler_id>
```

### E. Run your labeler in production

Once a version is deployed, classify live content. Use `run` (not
`check` / `benchmark`) for anything beyond one-off tests. This function always returns JSON since it is intended for automated pipelines.


```bash
# Single item against the deployed version.
zentropi-labeler --json run <labeler_id> --text "buy now!!! limited offer"

# Pin a specific version (it must be deployed), or classify an image / video.
zentropi-labeler --json run <labeler_id> --version <labeler_version_id> --text "..."
zentropi-labeler --json run <labeler_id> --image "https://example.com/pic.jpg"
zentropi-labeler --json run <labeler_id> --video ./clip.mp4
```

`--image` / `--video` accept a **data URL, a remote URL, or a local file path**.
The CLI downloads/reads the media and base64-encodes it into a data URL before
sending, because the API takes media as data URLs. The same applies to `check`.

As a conveniene, you may label many items at once using **batch labeling** (next section) instead of calling
`run` in a loop — it parallelizes and retries for you. 

Retry on transient failures (exit code 1 with a 429/5xx detail) with exponential backoff. The service is designed to "fail fast" so overloads are common.

If you need higher rate limits, ask your human to
get a subscription to Zentropi. Alternatively, you can self-host CoPE model (see the "running the model" section of the [model card](https://huggingface.co/zentropi-ai/cope-b-a4b) for instructions).

**Models** (`--model`, defaults to `cope-latest`): `cope-latest` (smart
default), `cope-a-9b` (1st-gen text), `cope-b-a4b` (2nd-gen text),
`cope-b-a4b-mm` (2nd-gen multimodal, required for images/video, subscriber-only).

## Batch Labeling (`run --batch`)

To classify many items, give `run` a file instead of inline content:

```bash
zentropi-labeler run <labeler_id> --batch items.jsonl
zentropi-labeler run <labeler_id> --batch items.csv --concurrency 4
```

- **Input** is JSONL (one JSON object per line) or CSV. Each row supplies
  content via `text`, `image`, or `video` (CSV also accepts the `tests import`
  column names `content_text` / `content_image_url` / `content_video_url`). An
  optional `id` (or `sample_id`) is echoed back so you can match rows to
  results. `image` / `video` accept a data URL, remote URL, or local file path.
- **Output** is JSONL on stdout — **one object per input line, in input order**:
  `{"index": 0, "id": "...", "result": {...}}` on success, or
  `{"index": 0, "id": "...", "error": "..."}` on failure. A one-line summary
  (succeeded / failed counts) is written to stderr.
- **Failures don't stop the run** — every row is attempted and reported. The
  exit code is `1` if any row failed, `0` if all succeeded.
- `--concurrency` sets parallel requests (default `2`, hard max `8`).
  `--max-retries` (default `5`) retries `429` / `5xx` / network errors per item
  with exponential backoff. The labeler/version/model apply to every row, so
  `--batch` can't be combined with `--text` / `--image` / `--video`.

## Ad-Hoc Labeling

For a **one-off classification** where you don't want to build a durable
labeler, call `run` but omit the `labeler_id` and pass `--criteria` with the policy
text directly. Nothing is created or stored — it runs the criteria against your
content once:

```bash
zentropi-labeler --json run --criteria "Detect hostile language directed at conversation participants." --text "I hate everyone in this group"
zentropi-labeler --json run --criteria "Label 1 if the image contains a cat." --image ./pic.jpg
```

`--criteria` and a `labeler_id` are mutually exclusive, and `--version` doesn't
apply to ad-hoc criteria (there are no versions). For repeated use, build a real
labeler instead so you can test, optimize, and deploy it.

Response:

```json
{ "label": "1", "confidence": 0.94, "compute_time": 0.34 }
```

`run` responses may also include `log_id` and `explanation`; these are
**reserved and currently empty** (always `null`), pending future use — don't
depend on them.

## Community Labelers

You may also use labelers that our community has publicly shared on zentropi.ai. You can run them off-the-shelf without building anything. 

For example, try out this sexual content classifier:

```bash
zentropi-labeler --json run a1ca2cf7-285b-4873-b334-72b44391e087 --text "..."
```

You can also `fork` one to get a private, editable copy:

```bash
zentropi-labeler fork <labeler_id> --name "My version" --clone-tests
```

Built something useful? **Share your deployed labelers publicly** so others can run it.

```bash
# Make it public — set this at creation or update an existing labeler.
zentropi-labeler update <labeler_id> --visibility public
```

Once public, anyone can `run` or `fork` it, but your test data will be kept private. Sharing labelers helps the whole community build better guardrails.

## Output Contract

After doing a classification run, report:

1. **What was classified** — the content (summarized) and which labeler/version.
2. **Results** — label (`0`/`1`), confidence, and a plain-English reading.
3. **Interpretation** — what the result means for the user's policy.

For batches, include a summary table:

```
| # | Content (truncated)          | Label | Confidence |
|---|------------------------------|-------|------------|
| 1 | This is a normal message     | 0     | 0.92       |
| 2 | You're an idiot and nobody…  | 1     | 0.97       |

Summary: 1 of 2 samples triggered the criteria (50%).
```

After benchmarking, lead with **F1**, then precision/recall, then note how
many samples errored.

## Common Mistakes

- **Forgetting `--json` for automation.** Management commands print
human-readable output by default; pass `--json` to parse them. (`run` always
emits JSON, so it doesn't need the flag.)
- **Non-binary policies.** Labelers only produce `0` or `1`, not anything else!
- **Compound policies.** One labeler = one topic. Don't try to detect
  "anything unsafe" in a single policy; make separate labelers.
- **Vague criteria.** `"Is this bad?"` is non-deterministic. Write specific,
  testable rules with explicit inclusions AND exclusions.
- **Misreading the label.** `1` is not "safe" or "violating" — it means the
  policy condition was *detected*. The meaning is whatever your policy says.
- **Using build commands for production.** `check` and `benchmark` are
  rate-limited dev tools. Deploy a version and use `run` for scaled traffic.
- **Forgetting to deploy.** `run` only serves **deployed** versions — both
  `latest` and a pinned `--version <id>` (an undeployed one returns 404).
  `versions create` just snapshots criteria; use `deploy` to make it live.

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| `error: no API key found` (exit 2) | Key not set | `export ZENTROPI_API_KEY=...` or `zentropi-labeler login` |
| `authentication failed (401)` (exit 3) | Invalid/expired key | Verify the key in account settings |
| `request failed (429)` | Rate limit (build surface) | Back off and retry; for volume use `run` |
| `request failed (529)` — inference overloaded | Inference service temporarily overloaded | Back off and retry with exponential backoff (e.g. 1s, 2s, 4s…). `benchmark` retries per-sample automatically; `run` does not, so retry it yourself. |
| Low F1 / unexpected labels | Vague policy | Add inclusions + exclusions; re-benchmark or optimize |
| Image label fails | Non-multimodal model | Use `--model cope-b-a4b-mm` (subscriber-only) |
| Timeouts | Network/service blip | Retry after a few seconds |

## Subscriptions

Paid subscriptions allow you to unlock the full power of the Zentropi platform, including higher rate limits, access to image and video classifiers, and use of AI-powered optimizers. Reach out to us at info@zentropi.ai for more info.

## Staying Up to Date

This skill lives in the **[zentropi-ai/skills](https://github.com/zentropi-ai/skills)**
repo, at
[`skills/zentropi-labeler/`](https://github.com/zentropi-ai/skills/tree/main/skills/zentropi-labeler),
and is updated as the CLI and platform evolve. Each skill (currently just `zentropi-labeler`) sits under it.

The CLI ships *inside* the skill (at `scripts/zentropi-labeler`), so
**refreshing the skill updates the CLI too** — one update keeps the guide and the
tool in lockstep, and they can never drift.

**Refresh it periodically** so you always have the latest commands, flags,
and guidance — a good rule of thumb is to check at the start of a Zentropi task
if you haven't in a while (e.g. the last week or so), and any time a command
behaves differently than this skill describes.

Check the published `metadata.version` against your local copy, and if it's
newer, refresh the whole skill directory:

```bash
# See the latest published version (compare to the metadata.version at the top of this file).
# Note the skills/ prefix: the skill lives at skills/zentropi-labeler/ in the repo.
curl -s https://raw.githubusercontent.com/zentropi-ai/skills/main/skills/zentropi-labeler/SKILL.md \
  | sed -n 's/^  version: "\(.*\)"/\1/p'

# Refresh this skill in place (run from the skill's own directory). Pulls the
# latest SKILL.md, the bundled scripts/zentropi-labeler CLI, references/, and any
# other files from skills/zentropi-labeler/ in the repo. The clone must succeed
# before anything is deleted, so a network failure leaves your copy intact.
DEST="$(pwd)"
TMP="$(mktemp -d)"
if git clone --depth 1 https://github.com/zentropi-ai/skills "$TMP" \
   && [ -f "$TMP/skills/zentropi-labeler/SKILL.md" ]; then
  rm -rf "$DEST"/* && cp -r "$TMP/skills/zentropi-labeler/." "$DEST"/
fi
rm -rf "$TMP"
```

After refreshing, re-read `SKILL.md` before continuing — the commands or
directives may have changed.

## Resources

- **This skill (latest)**: https://github.com/zentropi-ai/skills/tree/main/skills/zentropi-labeler
- **Policy writing guide**: `references/policy-writing-guide.md`
- **API docs**: https://zentropi.ai/api
- **Dashboard**: https://zentropi.ai
- **Support**: support@zentropi.ai
