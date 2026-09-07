How to write effective classification policies for the Zentropi CoPE
model. Policies are plain-English descriptions of what to detect — the
quality of your policy directly determines classification accuracy.

## What a Policy Does

Each policy is a **single binary labeler**: it classifies content
against one defined category and returns a single yes/no label. A
policy either applies to a piece of content or it doesn't — there is
no middle ground and no multiple outputs. The Includes and Excludes
sections define where that boundary sits.

## Policy Format

Every policy passed as `criteria_text` MUST follow this structure. Each
policy defines exactly **one label** with exactly one Includes section
and one Excludes section.

```markdown
# Criteria

## Overview

[Short statement of what subject matter the policy is meant to classify
and the strictness level being applied]

## Definition of Terms

- **[Term 1]**: [Precise definition of a word or phrase used repeatedly in the policy.]
- **[Term 2]**: [Another term definition.]

## Interpretation of Language

- [Instructions on how to handle ambiguous language for this policy]
- [Other guidance on how to apply this policy]

## Definition of Labels

### ([CODE]): [Label Name]

#### Includes

- **[Criterion Name]**: [Precise definition of a characteristic that causes content to qualify for this label. May include inline caveats.]
- **[Criterion Name]**: [Another inclusion criterion.]

#### Excludes

- **[Criterion Name]**: [Precise definition of a characteristic that causes content to NOT qualify for this label.]
- **[Criterion Name]**: [Another exclusion criterion.]
```

### Section-by-Section Guidance

**Overview** — One or two sentences. State the subject matter and the
strictness level being applied. "This policy provides classification
criteria for identifying whether content qualifies as Toxic, applying a
moderate strictness level" — not "Detect toxic content."

**Definition of Terms** — Define every term that appears **bolded**
throughout the policy. Be precise. Example:
- **Participant**: A person in written dialogue who writes messages, reads responses, and actively contributes. May be addressed using "you", their name, or second-person references.

**Interpretation of Language** — Tell the model how to reason about
ambiguity. Examples:
- "Evaluate content by considering both direct statements and the clear meaning conveyed through context"
- "Negative language itself does not automatically indicate toxic content when it fulfills a constructive function"
- "This policy focuses on observable content rather than user intent"

**Definition of Labels** — Each label gets a parenthetical code and a
name (e.g., `### (TX) Toxic Conversation Content`). Under each label:

- **Includes**: Named criteria, each as a bolded name followed by a colon and a precise definition. Sub-criteria use nested bullets with their own bold names. Criteria may carry inline `**Excludes**:` for narrow exceptions specific to that criterion.
- **Excludes**: Same format. Define what does NOT qualify, even if it superficially resembles the label.

### Criterion Naming

Each inclusion and exclusion is a **named criterion** with a bold label:

```markdown
- **Belittling or Mocking Conversation Content**: Imitates or satirizes participants' statements to undermine their standing, including: - **Sarcastic Trivialization**: Sarcasm trivializing participants'   positions (e.g., "Ain't she sweet?") - **Behavioral Mockery**: Characterizing behavior as dismissive or   pitiful (e.g., "truly sad," "laughable")
```

Naming criteria makes policies debuggable — when classification
produces unexpected results, you can identify which criterion fired or
failed to fire.

### Inline Exclusions

A criterion can carry its own narrow exclusion:

```markdown
- **Combative or Aggressive Conversation Content**: Uses violent terminology against participants' arguments. **Excludes**: Using violent terms to recount actual events or provide instructional context (e.g., "That building was demolished last week").
```

Use inline exclusions for exceptions specific to one criterion. Use the
top-level Excludes section for broad exceptions that apply across all
criteria.

## Core Principles

### Determinism

A good policy is **deterministic** — two independent readers applying it
to the same content should reach the same conclusion. If reasonable
people would disagree on how to apply your policy, it needs to be more
specific.

### Observable Content Only

Base all criteria on what content **contains, depicts, or states** —
never on what the author intended. Intent requires mind-reading; content
analysis requires only observation. This is the single most common
source of inconsistent classification.

**Common transformations:**

| Intent-Based (Avoid) | Observable (Use Instead) |
|-----------------------|--------------------------|
| "intended to harm" | "contains harmful content" or "depicts harm" |
| "designed to deceive" | "contains false information presented as fact" |
| "trying to manipulate" | "uses manipulation techniques including [specific list]" |
| "aims to promote violence" | "promotes violence through explicit advocacy or instruction" |
| "meant to circumvent" | "circumvents through [specific observable methods]" |

When writing criteria, ask: "Could a reviewer identify this without
guessing what the author was thinking?" If no, rewrite using observable
features.

## Strictness Framework

Policies operate at one of three strictness levels. The level affects
every section — definitions, inclusion thresholds, and exclusion scope.
State the level in the Overview and apply it consistently throughout.

| Aspect | Strict | Moderate | Permissive |
|--------|--------|----------|------------|
| **Definition Scope** | Broad — includes indirect references and implications | Standard interpretations | Narrow — requires explicit content |
| **Inclusion Approach** | Lower bar; borderline cases included | Balanced; clear instances | Higher bar; only egregious cases |
| **Exclusion Approach** | Minimal; only verified legitimate uses | Reasonable carve-outs for context | Broad; many contextual exceptions |
| **Ambiguity** | Include when in doubt | Evaluate case-by-case | Exclude unless explicit |

**Detecting strictness from a request:**
- Strict indicators: "comprehensive," "zero-tolerance," "err on the side of caution"
- Moderate indicators: "balanced," "reasonable," or no strong signal
- Permissive indicators: "minimal," "light-touch," "only the worst cases"

If the request doesn't specify, default to Moderate.

## Best Practices

### 1. Bold Key Terms Consistently

Define terms in **Definition of Terms**, then **bold** them at every use
throughout the policy. This anchors the model to your definitions.

### 2. Sequence Criteria as Sieves

Order criteria so common cases match first and narrow criteria appear
before broad ones. If one criterion is a subset of another, place the
narrower one first so it matches before the broader one absorbs it.

### 3. Make Criteria Granular

Create separate named criteria for each distinct type. A single "harmful
content" catch-all performs poorly. The toxicity example uses 9 inclusion
criteria and 8 exclusion criteria, each with sub-criteria.

### 4. Specify Exclusions AND Inclusions

For every label, provide both. Exclusions define the outer contour of
your policy — what looks like a match but isn't. Without exclusions,
expect high false positive rates.

### 5. Provide Examples

Use parenthetical examples `(e.g., "...")` within criterion definitions.
Examples anchor abstract definitions to concrete instances.

### 6. Use LLM-Friendly Patterns

Start criterion descriptions with consistent phrases like "Content
that..." to establish context for machine interpretation. Repeat
defined terms rather than using pronouns — redundancy aids LLM
consistency.

## Quick Reference

| Bad Policy | Problem | Fix |
|-----------|---------|-----|
| "Is this toxic?" | No structure, no definitions | Use the full format with Overview, Terms, Labels |
| "Flag harmful content" | No label definitions | Define each harm type as a separate named criterion |
| "Detect hate speech" | No protected classes defined | List protected characteristics in Definition of Terms |
| One-line criteria | Missing exclusions | Add Excludes section — at least 3-4 exclusion criteria |
| "Intended to harass" | Intent-based, not observable | Rewrite as "contains harassing content including [specific types]" |

## Size Guidelines

CoPE has an 8K token limit for combined policy + content. Keep policies
focused. If your policy exceeds ~4K tokens, consider splitting into
multiple labelers with separate policies.

## Iteration Workflow

1. **Start simple** — write a minimal policy covering the core case
2. **Test with examples** — classify 5-10 samples, review results
3. **Find the edges** — look for false positives and false negatives
4. **Add exclusions** — address false positives with explicit criteria
5. **Add inclusions** — address false negatives with more specific criteria
6. **Name everything** — every criterion should be named and debuggable
7. **Repeat** — iterate until confident in the policy's accuracy

## Source

Policy format based on CoPE model documentation:
https://huggingface.co/zentropi-ai/cope-a-9b