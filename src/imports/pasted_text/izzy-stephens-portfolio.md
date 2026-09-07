Build Izzy Stephens' UX Portfolio Website
Who this is for
Izzy Stephens is a UX Researcher and Designer based in Roxboro, NC. She's looking for mid-level roles at AI-native companies (think Anthropic, Vercel, Replit), design tooling companies, and community platforms. She's research-forward, ships, and uses AI tooling fluently. Her differentiator: she audited an LLM bias prompt and ran a usability study that moved a founder to reverse course on a core feature.
Design direction
Dark mode luxury, editorial, confident. Think Aesop product page meets Linear dark mode meets a high-end magazine spread. NOT generic tech-bro minimalism, NOT centered-everything safe layouts, NOT purple gradients on white.
The site should feel like she has taste, has a point of view, and isn't trying to look like every other UX portfolio. Warm dark backgrounds (not pure black), parchment cream text, saturated editorial red as the dominant accent. Asymmetry. Generous scale on type. One hero moment that stops the scroll.
Design system
Colors (CSS variables):

--bg: #0d0c0a (warm near-black, primary background)
--bg-elevated: #161412 (lifted surface)
--bg-card: #1a1815 (card surface)
--bg-tinted: #1d1411 (red-tinted callout background)
--ink: #ece5d3 (parchment cream, primary text)
--ink-soft: #b8b1a3 (secondary text)
--ink-muted: #6e6a5e (tertiary text)
--line: #2a2622 (borders)
--red: #d4322a (saturated editorial red, primary accent)
--red-deep: #8b1a1a (oxblood for fine detail)
--gold: #c9a96e (burnished accent, sparingly)

Add subtle radial gradients on body background: red tint at top-left (4% opacity), gold tint at bottom-right (2% opacity), fixed attachment for depth.
Typography:

Display: Fraunces (variable, opsz 9-144, weights 300-800) — for hero, section headlines, case titles
Body: Source Serif 4 (variable, opsz 8-60, weights 400-600) — for prose
Mono: JetBrains Mono (weights 400-600) — for tags, labels, technical content

Type rules:

Hero scale: clamp(56px, 11vw, 168px), font-weight 300, line-height 0.92, letter-spacing -0.04em
Section h2: 44px, font-weight 400, letter-spacing -0.02em
Display italics for emphasis (red color, weight 400)
All caps mono for labels with letter-spacing 0.12-0.16em
Body line-height 1.6-1.7

Layout:

Max-width 1280px, padding 40px
Generous vertical rhythm (80-120px between sections)
Sticky header with backdrop-filter blur

Page structure
1. Site header (sticky, with backdrop blur)

Left: "Izzy Stephens." with the period in red
Right: nav links in mono, uppercase, small (Goblins, Bias Audit, Meridian, Tools, Experience, Contact)

2. Hero (asymmetric, bold)

Vertical eyebrow on the left side (writing-mode: vertical-rl, rotated 180deg): "UX Researcher · Designer · based Roxboro NC" — red border-right, ink-colored bold words on red text
Title broken across three lines:

  I design
  research-driven    ← italic, red, slight indent
  products.

Below the title, a divider line, then a two-column row:

Left (2fr): Pitch line in display serif, ~28px, italic emphasis on key words: "Like the study where 5 out of 5 users read the same feature backwards, and the founder reversed course in the meeting where I delivered the data."
Right (1fr): Mono meta items with serif italic values:

Currently → Goblins, UX Consultant
Open to → Mid-level, remote or RTP





3. Section divider
A 1px line in --line color, with an 80px x 3px red bar overlapping the left edge.
4. Section label pattern (use throughout)
Mono, uppercase, 10px, letter-spacing 0.16em:

Red number (e.g., "01")
Middle dot separator
Section name
Long horizontal line filling remaining width

5. Goblins case study hero card
Full-width card on warm dark surface, 1px border, 3px red left border, 64px padding.

Mono tag: "UX Research · Solo · 16 weeks · 2026"
Display title: "Goblins Usability Study" (clamp 36-64px)
Stats row (4 columns, mono labels with serif numbers): 5 Participants / 8h Recordings / 136 Coded quotes / 4 Priority findings — each stat has a 32px serif number stacked above a small mono label
Bottom border divider
Italic display serif summary (22px): "The platform's first formal usability study. I scoped the full user journey against stakeholder advice, found that 5 of 5 participants misread Halfling mode the same way, and presented findings that moved the founder to reverse a core feature in the meeting where I delivered them."

6. Two-column case study layout

Left column (240px): Sticky anchor nav (top: 100px)

Mono red label: "In this case study"
List of 11 sections (Overview, The Setup, The Problem, Constraints, Study Design, The AI Prompt Work, Running the Study, Synthesis, Findings, Delivery, Reflections)
Each link: serif body, 13px, 2px transparent left border that becomes red on hover/active, ink color when active
Footer: small mono red text "↓ Embedded slides"


Right column (max 760px): Case content

Each section has 56px vertical padding and a subtle bottom border
h2 in display serif (44px, weight 400)
h3 in display serif (24px, weight 500)
Body in serif body, 17px, line-height 1.7
Use placeholder boxes (dashed border, mono text) for sections where prose will be added later — labeled "[wireframe placeholder]" in red mono uppercase



7. Participant chips (within Study Design section)
Row of 5 cards, flex-wrap, each card is dark surface with 1px border that becomes red on hover:

Mono red ID (P1, P2, etc.)
Display serif name (20px)
Muted body text describing the participant in one line

8. Stats row (within Synthesis section)
4-column grid, 1px gaps showing through to dark line color, dark card backgrounds:

Massive serif red number (56px, weight 300, letter-spacing -0.03em)
Mono uppercase label below

9. Finding callout (Halfling mode)
Red-tinted dark background, 3px red left border, 36px padding:

Mono red tag: "Finding 01 · Universal misread"
Display serif headline: "Halfling Mode" (32px, weight 400)
Body paragraph in soft ink describing the finding
Bottom divider (1px red at 30% opacity)
Mono red result line: "5 of 5 isn't a sample-size problem. It's a signal."

10. Pull quote
3px red left border, no background, 24px padding:

Display serif italic, 26px, weight 300, line-height 1.35
Mono uppercase attribution below: "P4 · JENDY"

11. Impact list
Dark card with 1px border, 36px padding:

Each row: red mono check (✓), ink text with bold lead-in then serif body
Subtle bottom border between rows

12. Canva embed placeholder
Dark elevated background, 80px vertical padding, 3px red top border, centered mono text:

Tiny red label "EMBEDDED"
"[ Canva research presentation slides ]"

13. Selected work — dual cards (Bias Audit + Meridian)
Two-column grid, 24px gap. Each card is dark surface with 1px border that becomes red on hover, lifts 2px:

Mono red tag at top
Display serif title (44px, weight 400)
Italic muted subtitle
Soft ink description (15px, line-height 1.65)
Embedded element specific to each card (see below)
Mono red CTA at bottom with arrow that slides on hover

Bias Audit card embed: A two-column "before/after" mono comparison block on dark elevated background. Tiny labels ("Before" muted, "After" red), then 10px mono text excerpts of the original vs revised prompt.
Meridian card embed: A terminal block — pure black background (#050403), 1px oxblood red border, mono green text (#4ade80) with red prompts (>):
> You stand at the crossroads of Meridian.
> The road forks east into mist and west into firelight.
> Which way will you go?█  ← blinking cursor
14. Job search tool section
Single full-width dark card, two-column inner grid (info left, screenshot right):

Left: mono red tag, large display serif title (48px), italic subtitle, two body paragraphs about what it does and why she built it, mono red CTA
Right: dashed-border placeholder for screenshot carousel, mono text inside saying "input → Claude scoring → ranked output"

15. Experience timeline (no preamble — section label only, then straight into the list)
Borderless top, 1px lines between each row. Each row is a 3-column grid:

Year range in mono red (200px column)
Role in display serif (22px) with org/context in italic muted body below
Takeaway in soft ink body (14px)
Subtle background lift on hover

Roles in order (most recent first): UX Researcher & Consultant @ Goblins (2026 · present), Primary Caregiver (2022-2025), Shipping & Receiving Clerk @ RR Donnelley (2021-2022), Cheesemaker's Assistant @ Boxcarr Handmade Cheese (2021), Deli Manager @ Harris Teeter (2019-2021), Cheese Consultant @ Harris Teeter Meadowmont (2018-2019), Personal Chef self-employed (2017-2018).
16. Footer (THE BOLD MOVE)
Dark background, 140px top padding, top border with the same 80px x 3px red bar overlap:

Mono red eyebrow: "CURRENTLY LOOKING"
Massive display serif headline (clamp 56-128px, weight 300, letter-spacing -0.04em): "I'm just getting started." — with "getting started." in italic red
80px breathing room
Three-column grid divided by top border:

Looking for: Mid-level Product Designer / UX Researcher with design exposure / UX Designer-Researcher hybrid / Roles where research has a seat at the table
Industries that fit: AI-native product companies / Design tooling, dev tools / Community platforms / Healthtech, edtech with consumer surface
Not for me: Defense, weapons, surveillance / Predatory finance, MLM / "Rockstar," "ninja," work-hard-play-hard / Pure-execution UI titles — these items are styled with text-decoration: line-through in red, color muted ink


Bottom contact strip: email, LinkedIn, GitHub as mono links with bottom borders that turn red on hover, plus copyright in muted mono on the right

Critical design moves (don't water these down)

Vertical eyebrow on hero — runs up the left side of the title, red border on the right edge
Italic red emphasis on key phrases — "research-driven," "getting started," "5 out of 5 users" — this is the visual signature
The strikethrough red list in the footer — "Not for me" with red line-through is the most opinionated thing on the page; keep it
Display serif numbers in stats rows (massive Fraunces numerals against tiny mono labels) — luxury editorial pattern
Asymmetric divider bars (80px x 3px red bars overlapping section dividers) as visual rhythm
The Halfling finding callout uses a red-tinted dark surface — not the same as standard cards
Backdrop-filter blur on sticky header for that modern dark-mode app feel

What to avoid

Inter, Roboto, system fonts (use Fraunces + Source Serif 4 + JetBrains Mono)
Pure black backgrounds (use warm near-black #0d0c0a)
Centered everything (favor asymmetric layouts, especially in hero)
Generic "Let's talk" or "Get in touch" footers (use the manifesto structure)
Purple gradients, rainbow accents, neon — only red and the occasional gold
Stock-photo placeholders (use mono-text dashed boxes for any missing imagery)
Card hover effects that scale or rotate (just border color change + 2px lift)
Overuse of red — it's the accent, not the field; aim for ~10% of total visual weight

Output
Build this as a single-page scroll. The Goblins case study is the hero content. The other sections (Bias Audit, Meridian, Job Search Tool, Experience, Footer) follow below it. Anchor nav for the case study should sticky-scroll. All other navigation is via the top header.