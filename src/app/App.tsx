import { lazy, Suspense } from 'react';
import StickyHeader from './components/StickyHeader';
import SectionDivider from './components/SectionDivider';
import SectionLabel from './components/SectionLabel';
import CaseStudyNav from './components/CaseStudyNav';
import ParticipantChip from './components/ParticipantChip';
import StatCard from './components/StatCard';

// Lazy-loaded: ships in its own chunk, fetched only when React renders it
const MeridianEmbed = lazy(() => import('./components/MeridianEmbed'));

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <StickyHeader />

      {/* Hero Section */}
      <section className="hero-bg max-w-[1280px] mx-auto px-10 pt-24 pb-32 relative">
        <div className="flex items-start gap-12">
          {/* Vertical eyebrow */}
          <div
            className="font-['JetBrains_Mono'] text-[11px] tracking-[0.12em] uppercase text-[var(--red)] border-r-2 border-[var(--red)] pr-3"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="text-[var(--ink)]">UX Researcher</span> · <span className="text-[var(--ink)]">Designer</span> · based Roxboro NC
          </div>

          <div className="flex-1">
            {/* Hero title */}
            <h1
              className="font-['Fraunces'] mb-12"
              style={{
                fontSize: 'clamp(56px, 11vw, 168px)',
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: '-0.04em'
              }}
            >
              I design<br />
              <span className="italic text-[var(--red)] ml-12" style={{ fontWeight: 400 }}>
                research-driven
              </span>
              <br />
              products.
            </h1>

            {/* Divider */}
            <div className="h-px bg-[var(--line)] mb-12"></div>

            {/* Two-column row */}
            <div className="grid grid-cols-[2fr,1fr] gap-16">
              <p className="font-['Fraunces'] text-[28px] leading-[1.4]" style={{ fontWeight: 300 }}>
                Like the study where{' '}
                <em className="text-[var(--red)]" style={{ fontWeight: 400 }}>5 out of 5 users</em> read the same
                feature backwards, and the founder reversed course in the meeting where I delivered the data.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                    Currently
                  </div>
                  <div className="font-['Source_Serif_4'] italic text-[15px] text-[var(--ink)]">
                    Goblins, UX Consultant
                  </div>
                </div>
                <div>
                  <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                    Open to
                  </div>
                  <div className="font-['Source_Serif_4'] italic text-[15px] text-[var(--ink)]">
                    Mid-level, remote or RTP
                  </div>
                </div>
                <div className="border-t border-[var(--line)] pt-3">
                  <div className="font-['Source_Serif_4'] text-[13px] text-[var(--ink-soft)] leading-[1.5]">
                    Willing to relocate for the right team.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Goblins Case Study Hero Card */}
      <section id="goblins" className="max-w-[1280px] mx-auto px-10 pb-20">
        <SectionLabel number="01" label="Goblins Case Study" />

        <div className="border border-[var(--line)] border-l-[3px] border-l-[var(--red)] bg-[var(--bg-card)] p-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6">
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              UX Research
            </span>
            <span className="text-[var(--ink-muted)] font-['JetBrains_Mono'] text-[10px]">·</span>
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--ink)] border border-[var(--red)]/50 px-2 py-0.5">
              Solo
            </span>
            <span className="text-[var(--ink-muted)] font-['JetBrains_Mono'] text-[10px]">·</span>
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              16 weeks
            </span>
            <span className="text-[var(--ink-muted)] font-['JetBrains_Mono'] text-[10px]">·</span>
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              2026
            </span>
          </div>

          <h2
            className="font-['Fraunces'] mb-12"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}
          >
            How I Found Goblins (and Then Helped Them Find Their Users)
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-8 mb-12 pb-12 border-b border-[var(--line)]">
            {[
              { number: '5', label: 'Participants', context: 'recruited & selected' },
              { number: '8h', label: 'Recordings', context: 'watched back in full' },
              { number: '136', label: 'Coded quotes', context: 'extracted & tagged' },
              { number: '4', label: 'Priority findings', context: 'from 11 clusters' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-['Source_Serif_4'] text-[32px] text-[var(--ink)] mb-1">
                  {stat.number}
                </div>
                <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                  {stat.label}
                </div>
                <div className="font-['JetBrains_Mono'] text-[9px] text-[var(--ink-muted)] tracking-[0.06em]">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Fraunces'] italic text-[22px] leading-[1.45] text-[var(--ink-soft)]" style={{ fontWeight: 300 }}>
            Goblins is a gaming-focused social connection platform designed to help gamers, particularly introverts,
            find gaming partners and friends. This case study covers the platform's first formal usability study,
            from how I joined the team to what I found when I finally put it in front of real users.
          </p>
        </div>
      </section>

      {/* Case Study Content with Sticky Nav */}
      <section className="max-w-[1280px] mx-auto px-10 pb-32">
        <div className="flex gap-16">
          <div className="w-60 flex-shrink-0">
            <CaseStudyNav />
          </div>

          <div className="flex-1 max-w-[760px]">
            {/* The Setup */}
            <div id="the-setup" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                The Setup
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                In February 2025, I was in my first semester of college taking an intro to UX class, and for my
                course project I was assigned to build a native dating app prototype with full creative control
                over the concept. I decided to make an app called Icebreaker, where the whole premise was
                incorporating games to help people connect on a deeper level before going out on a date.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I started doing market research to find direct and indirect competitors, which turned out to be
                harder than I expected. After several creative Google searches, I came across a platform called
                Date Like Goblins, and it was the closest thing to what I was designing. I signed up and created
                a profile, and since I was married, signing up for dating platforms felt a little odd so I put
                it right in my bio that I'm doing UX research for a school project.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                A few days later, I got an email from the founder, Lise, who wanted to team up. Apparently her
                developer at the time had advised her to bring on a UX designer, not just a UI or graphic designer.
                I accepted, started hanging out in the Goblins Discord, and attended the mod meetings for several
                months while development was quiet.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                I was very up front and honest about my experience level because I was a first-semester UX student,
                but I also stood my ground with confidence that I could do what I said I could for them. When Lise
                started bringing more people onto the team, I was invited to join their Slack. Once I proved I could
                keep up with the others and they truly started to see my worth, I was officially brought onto the
                team in August 2025 as an equity-only UX consultant with the understanding that school comes first.
              </p>
            </div>

            {/* The Problem */}
            <div id="the-problem" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                The Problem
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                Goblins had been around for about three years by the time I started my semester, but it was still
                in beta with a small, engaged community in Discord, a founder who had built and maintained it with
                a single developer in her spare time, and a clear vision for what it could be. What it didn't have
                was any formal user research — no usability testing, no structured feedback, no data on where users
                were struggling or dropping off, and the platform had never been put in front of a real user and
                watched.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                Lise and even my professor suggested I focus the study on just the scheduling section, but I pushed
                back on that because the scheduling flow wasn't where the biggest friction was. If someone made it
                all the way to scheduling, they'd already survived sign-up, profile creation, the AI profile review,
                and search, and those earlier touchpoints were where the first impressions happened and where the
                biggest risk of drop-off lived.
              </p>
            </div>

            {/* The Constraints */}
            <div id="the-constraints" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                The Constraints
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                This study didn't happen in a well-resourced lab with a full research team behind it, so here's
                what I was actually working with.
              </p>

              <h3 className="font-['Fraunces'] text-[24px] mb-3 mt-6" style={{ fontWeight: 500 }}>
                Timeline
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                Sixteen weeks for the full semester, from study design through analysis and presentation — that
                included building the screener, recruiting participants, running a pilot, conducting five sessions,
                coding 136 quotes, building an affinity diagram, and creating a stakeholder presentation, and I
                did all of it solo.
              </p>

              <h3 className="font-['Fraunces'] text-[24px] mb-3" style={{ fontWeight: 500 }}>
                Budget
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                Virtually none. I received a small monthly stipend, but there was no dedicated research budget,
                and I eventually convinced Lise to offer participants a $20 gift card for their time, which was
                a win in itself.
              </p>

              <h3 className="font-['Fraunces'] text-[24px] mb-3" style={{ fontWeight: 500 }}>
                Team
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                The two people who were supposed to be my supervisors for work-based learning were both let go
                on the same day, one week after I started my semester. That flipped my expectations because I'd
                been looking forward to working closely with them, and suddenly they were gone. Lise took over
                as my supervisor, and I adapted to the change in guidance and leadership.
              </p>
            </div>

            {/* Study Design */}
            <div id="study-design" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                Study Design
              </h2>

              <h3 className="font-['Fraunces'] text-[24px] mb-3" style={{ fontWeight: 500 }}>
                Why moderated, why qualitative
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                I chose moderated sessions because I wanted a more interactive approach focused on qualitative data,
                and I wanted to watch people use the platform in real time, hear their thought process, and ask
                follow-up questions when something unexpected came up. It was also the most budget-friendly option
                since all I needed was Google Meet and a screen recording.
              </p>

              <h3 className="font-['Fraunces'] text-[24px] mb-3" style={{ fontWeight: 500 }}>
                Scope: sign-up through scheduling
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                I scoped the study to cover the full primary user journey, from creating an account to booking a
                gaming session. That's a lot of ground for a single study, and both Lise and my professor questioned
                whether I should narrow it down. But the platform had never been tested at all, so I wanted to cast
                a wide net, find the biggest pain points wherever they lived, and give the team a real baseline to
                work from.
              </p>

              <h3 className="font-['Fraunces'] text-[24px] mb-4 mt-8" style={{ fontWeight: 500 }}>
                Meet the participants
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { id: 'P1', name: 'Shea', desc: 'Fairly new to Goblins, games a couple hours a day' },
                  { id: 'P2', name: 'Jac', desc: 'From the UK, works hospitality with no fixed schedule' },
                  { id: 'P3', name: 'Jeffrey', desc: 'UX writer in his 50s, games 4-5 hours a day' },
                  { id: 'P4', name: 'Jendy', desc: 'Games 2-3 times per week, loves playing with her daughter' },
                  { id: 'P5', name: 'Korin', desc: 'Lifelong gamer spending at least 5 hours a day gaming' }
                ].map((p) => (
                  <ParticipantChip key={p.id} id={p.id} name={p.name} description={p.desc} />
                ))}
              </div>
            </div>

            {/* The AI Behind the Profiles */}
            <div id="the-ai-behind-the-profiles" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                The AI Behind the Profiles
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                This section isn't about the usability study directly but about a separate piece of work I did for
                Goblins that I think says something about how I approach problems.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                Goblins uses an LLM-based system to review and score every user profile before it goes live on the
                platform. The idea is quality control: make sure profiles are genuine, safe, and give other users
                enough signal to decide if they want to connect. When Lise handed me the prompt, I asked her what
                she'd done to test it. She said she hadn't, so I took it over.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                The original prompt was biased toward extroversion and anecdotal specificity, which meant it rewarded
                storytelling, humor, and high-energy tone while profiles that were calm, values-driven, or
                introspective were scored lower even when they were socially clear and safe. Concise profiles were
                being labeled "underdeveloped" regardless of how coherent they were.
              </p>

              <h3 className="font-['Fraunces'] text-[24px] mb-3" style={{ fontWeight: 500 }}>
                What I changed
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I expanded the definition of specificity to include values, communication style, emotional boundaries,
                and interaction preferences because not everyone expresses themselves through stories and humor, and
                the scoring system needed to recognize that. I introduced the concept of "emotional predictability"
                as a core metric: can you predict what interacting with this person will feel like?
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                I added explicit protections for neurodivergent communication styles and introduced an approval-based
                feedback system where profiles scoring 4-5 get approved with minimal, affirming feedback, and profiles
                scoring 1-3 get clear, directive guidance on what needs to change.
              </p>
            </div>

            {/* Running the Study */}
            <div id="running-the-study" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                Running the Study
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                The pilot with Chris ran on March 8, 2026, and the five participant sessions ran from March 15 to
                March 19, with each session about an hour long, conducted over Google Meet with screen recording
                and think-aloud protocol.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I facilitated every session myself with a consistent format: participants started from the sign-up
                page and worked through account creation, profile setup, browsing and searching for other users,
                and booking a session. I gave them a premade bio to bypass the LLM review (based on what I'd learned
                in the pilot) and asked them to think out loud throughout.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                One night, I ran sessions back to back from 9 PM to 12:30 AM with only a 15-minute break in between,
                and that's a facilitation boundary I wouldn't repeat because by the end I was running on caffeine
                and adrenaline, and while the data from those sessions was still solid, I wasn't at my sharpest for
                follow-up questions.
              </p>

              <h3 className="font-['Fraunces'] text-[24px] mb-3" style={{ fontWeight: 500 }}>
                What surprised me
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                The biggest surprise was Halfling mode. Goblins has three visibility modes: Normal (photos visible
                to everyone), Goblin (no photos, fully anonymous), and Halfling (photos visible to your connections
                only). I expected some confusion around Halfling, but I wasn't expecting all five participants to
                have roughly the same misread where every single one assumed Halfling worked the opposite way.
              </p>
            </div>

            {/* Synthesis */}
            <div id="synthesis" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                Synthesis
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                After the sessions wrapped, I watched back through all the recordings, which was about eight hours
                of video, and I extracted every meaningful quote and observation, tagging each one with the
                participant, timestamp, the section or page where it happened, the sentiment, and a potential theme.
                That produced 136 coded quotes.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                From there I built an affinity diagram, grouping the quotes into clusters based on the themes I'd
                been tagging, and eleven clusters emerged. Some were clearly dominant since the Halfling mode
                confusion showed up across all five participants with near-identical language, while others were
                more scattered but still meaningful.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                I prioritized based on two factors: how many participants the issue affected and how much impact
                it had on the user's ability to move through the platform. The four clusters that rose to the top
                became my primary findings, and the rest I filed as honorable mentions.
              </p>

              <div className="grid grid-cols-4 gap-1 my-8">
                <StatCard number="8h" label="Recordings" context="watched back in full" />
                <StatCard number="136" label="Coded quotes" context="extracted & tagged" />
                <StatCard number="11" label="Clusters" context="from affinity diagram" />
                <StatCard number="4" label="Priority findings" context="selected for presentation" />
              </div>
            </div>

            {/* Findings */}
            <div id="findings" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                Findings
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-8">
                Four findings rose to the top, and I'm presenting them in priority order based on severity and
                breadth of impact.
              </p>

              {/* Finding 1: Halfling Mode */}
              <div className="bg-[var(--bg-tinted)] border-l-[3px] border-l-[var(--red)] p-9 mb-8">
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] mb-4">
                  Finding 01 · Universal misread
                </div>
                <h3 className="font-['Fraunces'] text-[32px] mb-4" style={{ fontWeight: 400 }}>
                  Halfling Mode
                </h3>
                <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                  All five participants interpreted Halfling mode the same way, and all five were wrong. They assumed
                  it meant their photos would be hidden by default and revealed after forming a connection, but the
                  actual behavior is the opposite: photos are visible to everyone and hidden from non-connections
                  only after the user opts in.
                </p>
                <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                  This wasn't a minor misunderstanding but rather every participant having an immediate, confident
                  interpretation that happened to be backwards. When told how it actually works, reactions ranged
                  from confusion to mild discomfort, and several participants said they preferred the version they'd
                  imagined.
                </p>
                <div className="border-t border-[var(--red)]/30 pt-4">
                  <div className="font-['JetBrains_Mono'] text-[11px] text-[var(--red)]">
                    5 of 5 isn't a sample-size problem. It's a signal.
                  </div>
                </div>
              </div>

              {/* Pull quote — research evidence, not testimonial */}
              <div className="border-l-[3px] border-l-[var(--red)] pl-6 py-2 mb-8">
                <p className="font-['Fraunces'] italic text-[26px] leading-[1.35] text-[var(--ink)] mb-4" style={{ fontWeight: 300 }}>
                  "I would like the opposite. I met this person and I like the bio, I like the games. After we
                  become friends, the intention is met, we can see each other."
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] border border-[var(--red)]/40 px-2 py-0.5">
                    P4
                  </span>
                  <span className="font-['JetBrains_Mono'] uppercase text-[9px] tracking-[0.12em] text-[var(--ink-muted)]">
                    Jendy · Session 4 · March 18, 2026
                  </span>
                </div>
              </div>

              {/* Finding 2: Navigation */}
              <div className="border border-[var(--line)] border-l-[3px] border-l-[var(--red)] bg-[var(--bg-card)] p-9 mb-8 mt-8">
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] mb-4">
                  Finding 02 · System-wide gap
                </div>
                <h3 className="font-['Fraunces'] text-[32px] mb-4" style={{ fontWeight: 400 }}>
                  Navigation and Wayfinding
                </h3>
                <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                  There was a system-wide gap in feedback where users couldn't tell where they were in the platform,
                  whether their actions had registered, or how to get back. Save states were unclear, progress
                  indicators were missing, and the back button behavior was unpredictable.
                </p>
              </div>

              {/* Finding 3: Profile Copy */}
              <div className="border border-[var(--line)] border-l-[3px] border-l-[var(--red)] bg-[var(--bg-card)] p-9 mb-8">
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] mb-4">
                  Finding 03 · Terminology
                </div>
                <h3 className="font-['Fraunces'] text-[32px] mb-4" style={{ fontWeight: 400 }}>
                  Profile Copy and Terminology
                </h3>
                <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                  The profile questions weren't wrong, but the language around them created confusion since terms
                  like "Yearbook Quote" and "Ultimate Goblin Mode" and "My Icks" landed differently depending on
                  the participant's age, cultural background, and familiarity with internet slang.
                </p>
              </div>

              {/* Finding 4: Identity and Culture */}
              <div className="border border-[var(--line)] border-l-[3px] border-l-[var(--red)] bg-[var(--bg-card)] p-9 mb-8">
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] mb-4">
                  Finding 04 · Inclusion and safety
                </div>
                <h3 className="font-['Fraunces'] text-[32px] mb-4" style={{ fontWeight: 400 }}>
                  Identity, Culture, and Accessibility
                </h3>
                <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                  Goblins wants to serve a diverse community, but parts of the experience assume a specific cultural
                  background. The most pointed observation came from Jendy, who raised a concern about the
                  neurodivergence question on the profile. Being asked to disclose neurodivergence on a social
                  platform carries different weight depending on where you are, who might see it, and whether that
                  disclosure could affect how you're treated.
                </p>
              </div>
            </div>

            {/* Delivering the Research */}
            <div id="delivering-the-research" className="py-14 border-b border-[var(--line)]">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                Delivering the Research
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                The presentation happened on April 26, 2026, and I'd invited the full team so everyone would receive
                the same information at the same time. Lise, Zoe, and Rebecca attended while the others caught the
                recording later.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                I structured the presentation to mirror the way I'd thought about the work: methodology and
                participants first, what's working so the team could hear the wins before the friction, the four
                prioritized findings with Halfling mode at the center because it had the strongest evidence,
                honorable mentions, the strategic identity layer, what the study didn't cover, and a set of "how
                might we" questions to seed the brainstorming that would follow.
              </p>

              <h3 className="font-['Fraunces'] text-[28px] mb-3" style={{ fontWeight: 500 }}>
                How Halfling mode landed
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I went in expecting pushback since Lise had built Halfling mode on a model that came from her
                experience with dating apps: hide photos until interest is established, and you get ghosted when
                the reveal happens, so the current behavior was deliberate, not accidental.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                When I presented the finding, Lise made the case for the current design by referencing the
                dating-app pattern. I pushed back because the lens of dating apps doesn't necessarily apply to
                gamers, who tend to care more about personality and shared interests than appearance. The
                conversation didn't end with full agreement, but it ended with movement since Lise said she'd
                put Halfling mode on ice and pivot to a simpler two-mode system.
              </p>

              <div className="bg-[var(--bg-card)] border border-[var(--line)] p-9">
                <h3 className="font-['Fraunces'] text-[20px] mb-4" style={{ fontWeight: 500 }}>
                  What got actioned
                </h3>
                <ul className="space-y-4">
                  {[
                    { lead: 'Halfling mode:', body: 'Deprioritized in favor of a two-mode system (full visibility or full anonymity)' },
                    { lead: 'Goblins University:', body: 'Scheduled for rename to distance the brand from dating-app associations' },
                    { lead: 'MVP framing:', body: 'Explicitly adopted as a guiding principle for design work going forward' },
                    { lead: 'Other improvements:', body: 'Available now status, timezone filtering, and accessibility flagged for redesign' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 pb-4 border-b border-[var(--line)] last:border-0">
                      <span className="text-[var(--red)] font-['JetBrains_Mono'] text-[12px]">✓</span>
                      <div className="flex-1">
                        <span className="font-['Source_Serif_4'] text-[17px] leading-[1.7]">
                          <strong className="text-[var(--ink)]">{item.lead}</strong>{' '}
                          <span className="text-[var(--ink-soft)]">{item.body}</span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reflections */}
            <div id="reflections" className="py-14 px-10 bg-[var(--bg-elevated)] border-l-2 border-l-[var(--gold)] -mx-10">
              <h2 className="font-['Fraunces'] text-[44px] mb-6" style={{ fontWeight: 400 }}>
                Reflections
              </h2>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                This was my first professional usability study, and I want to name that directly because I think
                it matters for context and because I'm not interested in pretending otherwise.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                Everyone starts somewhere, but not a lot of people start here. I designed a study that covered the
                full user journey of a live platform, recruited and selected a diverse participant pool, facilitated
                five moderated sessions solo, hand-coded 136 quotes from eight hours of recordings, built a synthesis
                framework from scratch, and delivered findings to a founder who built the thing I was critiquing —
                all in a sixteen-week semester, with no research budget, no team, and a supervisor change in the
                first week.
              </p>

              <h3 className="font-['Fraunces'] text-[28px] mb-3" style={{ fontWeight: 500 }}>
                What I'd change
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I'd recruit more participants from outside the Goblins community since four out of five came from
                the Discord. While their feedback was valuable and several hadn't used the platform much, my original
                goal was to have at least two true outsiders.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I'd set stricter time boundaries for sessions since running studies from 9 PM to 12:30 AM with a
                15-minute break isn't sustainable, and I could feel it affecting my follow-up questions by the end
                of the night.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                I'd invest more time upfront in stakeholder education because the early confusion with Lise about
                what a usability study actually entails could've been avoided with a better kickoff conversation.
              </p>

              <h3 className="font-['Fraunces'] text-[28px] mb-3" style={{ fontWeight: 500 }}>
                What I learned
              </h3>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I learned that the most useful research skill isn't any specific method but knowing how to sit with
                data that might be uncomfortable for the people who need to hear it and figure out how to deliver
                it in a way that creates movement instead of defensiveness.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                I also learned that I work well under constraints that would make most people quit since losing both
                supervisors in the first week could've derailed the whole semester, but instead I adapted, kept
                going, and produced work that earned the trust of everyone I collaborated with. I earned where I am
                now, and I'm just getting started.
              </p>
            </div>

            {/* Embedded slides placeholder */}
            <div className="bg-[var(--bg-elevated)] border-t-[3px] border-t-[var(--red)] py-20 text-center">
              <div className="font-['JetBrains_Mono'] uppercase text-[9px] tracking-[0.16em] text-[var(--red)] mb-2">
                Embedded
              </div>
              <div className="font-['JetBrains_Mono'] text-[13px] text-[var(--ink-muted)]">
                [ Canva research presentation slides ]
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Selected Work - Bias Audit & Meridian */}
      <section className="max-w-[1280px] mx-auto px-10 pb-32">
        <SectionLabel number="02" label="Selected Work" />

        <div className="grid grid-cols-2 gap-6">
          {/* Bias Audit */}
          <div
            id="bias-audit"
            className="border border-[var(--line)] bg-[var(--bg-card)] p-12 hover:border-[var(--red)] transition-all hover:-translate-y-0.5 group"
          >
            <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] mb-4">
              Research · Prompt Engineering
            </div>
            <h3 className="font-['Fraunces'] text-[44px] mb-3" style={{ fontWeight: 400 }}>
              Bias Audit
            </h3>
            <p className="font-['Source_Serif_4'] italic text-[15px] text-[var(--ink-muted)] mb-6">
              The LLM prompt that needed a rewrite
            </p>
            <p className="font-['Source_Serif_4'] text-[15px] leading-[1.65] text-[var(--ink-soft)] mb-8">
              I audited an AI product's core prompt and found it was reinforcing gender stereotypes in character
              suggestions. Rewrote the instruction set to neutralize bias without breaking functionality. The revised
              prompt shipped within a week.
            </p>

            <div className="bg-[var(--bg-elevated)] p-6 mb-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-3">
                    Before
                  </div>
                  <pre className="font-['JetBrains_Mono'] text-[10px] leading-[1.6] text-[var(--ink-soft)]">
                    "Suggest a warrior (male)<br />
                    or healer (female) based<br />
                    on user preference."
                  </pre>
                </div>
                <div>
                  <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[var(--red)] mb-3">
                    After
                  </div>
                  <pre className="font-['JetBrains_Mono'] text-[10px] leading-[1.6] text-[var(--ink)]">
                    "Suggest archetypes without<br />
                    gender assumptions. Let the<br />
                    user define their character."
                  </pre>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--red)] inline-flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Not posted publicly — ask me <span>→</span>
            </a>
          </div>

          {/* Meridian */}
          <div
            id="meridian"
            className="border border-[var(--line)] bg-[var(--bg-card)] p-12 hover:border-[var(--red)] transition-all hover:-translate-y-0.5 group"
          >
            <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] mb-4">
              Design · Solo project
            </div>
            <h3 className="font-['Fraunces'] text-[44px] mb-3" style={{ fontWeight: 400 }}>
              Meridian
            </h3>
            <p className="font-['Source_Serif_4'] italic text-[15px] text-[var(--ink-muted)] mb-6">
              A text-based adventure prototype
            </p>
            <p className="font-['Source_Serif_4'] text-[15px] leading-[1.65] text-[var(--ink-soft)] mb-8">
              A narrative engine experiment I built to test branching story structures and player agency. Pure text
              interface, zero graphics. Designed to feel like you're reading a book that responds to you. Currently
              shelved, but taught me a lot about interaction pacing.
            </p>

            <Suspense fallback={
              <div className="w-full mb-8 flex items-center justify-center bg-[#050403] border border-[var(--red-deep)]" style={{ height: '620px' }}>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#39ff6e] tracking-[0.12em] animate-pulse">
                  loading...
                </span>
              </div>
            }>
              <MeridianEmbed />
            </Suspense>

            <a
              href="#contact"
              className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--red)] inline-flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Prototype on request <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Job Search Tool */}
      <section id="tools" className="max-w-[1280px] mx-auto px-10 pb-32">
        <SectionLabel number="03" label="Tools I've Built" />

        <div className="border border-[var(--line)] bg-[var(--bg-card)] p-12">
          <div className="grid grid-cols-[1fr,1fr] gap-16">
            <div>
              <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--red)] mb-4">
                Side project · Active
              </div>
              <h3 className="font-['Fraunces'] text-[48px] mb-3" style={{ fontWeight: 400 }}>
                Job Search Scoring Tool
              </h3>
              <p className="font-['Source_Serif_4'] italic text-[15px] text-[var(--ink-muted)] mb-6">
                Claude + spreadsheets = faster applications
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
                I built a lightweight tool that takes job descriptions, runs them through Claude, and scores them
                against my criteria (role clarity, research-forward culture, AI fluency). Output is a ranked list
                with reasoning.
              </p>
              <p className="font-['Source_Serif_4'] text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
                Saves me 2-3 hours a week and surfaces roles I would've scrolled past. It's a janky spreadsheet +
                API workflow, but it works.
              </p>
              <a
                href="#contact"
                className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--red)] inline-flex items-center gap-2"
              >
                Ask me about it <span>→</span>
              </a>
            </div>

            <div className="flex flex-col border border-[var(--line)] overflow-hidden">
              {/* Drop your gif src into the img tag below */}
              <div className="relative bg-[var(--bg)] aspect-video flex items-center justify-center">
                <img
                  src=""
                  alt="Job search scoring tool demo"
                  className="w-full h-full object-cover hidden [&[src]]:block"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none [img[src]+&]:hidden">
                  <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)] text-center">
                    [ gif demo ]
                  </div>
                </div>
              </div>
              <div className="border-t border-[var(--line)] px-6 py-4">
                <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[var(--red)] mb-1">
                  In action
                </div>
                <div className="font-['Source_Serif_4'] italic text-[13px] text-[var(--ink-muted)]">
                  Input → Claude scoring → ranked output
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Experience Timeline */}
      <section id="experience" className="max-w-[1280px] mx-auto px-10 pb-32">
        <SectionLabel number="04" label="Experience" />

        <div className="border-t-0">
          {[
            {
              years: '2026 · present',
              role: 'UX Researcher & Consultant',
              org: 'Goblins',
              takeaway: 'First formal usability study moved a core feature decision in real time'
            },
            {
              years: '2022-2025',
              role: 'Primary Caregiver',
              org: 'Family responsibilities',
              takeaway: 'Project management, emotional labor, and zero margin for error'
            },
            {
              years: '2021-2022',
              role: 'Shipping & Receiving Clerk',
              org: 'RR Donnelley',
              takeaway: 'Inventory systems, logistics optimization, tight deadlines'
            },
            {
              years: '2021',
              role: "Cheesemaker's Assistant",
              org: 'Boxcarr Handmade Cheese',
              takeaway: 'Process precision, sensory evaluation, craft production'
            },
            {
              years: '2019-2021',
              role: 'Deli Manager',
              org: 'Harris Teeter',
              takeaway: 'Team leadership, inventory forecasting, customer-facing ops'
            },
            {
              years: '2018-2019',
              role: 'Cheese Consultant',
              org: 'Harris Teeter Meadowmont',
              takeaway: 'Product expertise, customer education, sales'
            },
            {
              years: '2017-2018',
              role: 'Personal Chef',
              org: 'Self-employed',
              takeaway: 'Client research, menu design, execution under constraints'
            }
          ].map((job, i) => (
            <div
              key={i}
              className="grid grid-cols-[200px,1fr,1fr] gap-8 py-6 border-b border-[var(--line)] hover:bg-[var(--bg-elevated)] transition-colors px-6 -mx-6"
            >
              <div className="font-['JetBrains_Mono'] text-[11px] text-[var(--red)] tracking-[0.12em]">
                {job.years}
              </div>
              <div>
                <div className="font-['Fraunces'] text-[22px] text-[var(--ink)] mb-1" style={{ fontWeight: 400 }}>
                  {job.role}
                </div>
                <div className="font-['Source_Serif_4'] italic text-[14px] text-[var(--ink-muted)]">
                  {job.org}
                </div>
              </div>
              <div className="font-['Source_Serif_4'] text-[14px] text-[var(--ink-soft)]">
                {job.takeaway}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - The Bold Move */}
      <footer id="contact" className="border-t border-[var(--line)] relative">
        <div className="absolute left-10 top-0 w-20 h-[3px] bg-[var(--red)]"></div>

        <div className="max-w-[1280px] mx-auto px-10 pt-36 pb-12">
          <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.16em] text-[var(--red)] mb-8">
            Currently Looking
          </div>

          <h2
            className="font-['Fraunces'] mb-20"
            style={{
              fontSize: 'clamp(56px, 9vw, 128px)',
              fontWeight: 300,
              lineHeight: 0.96,
              letterSpacing: '-0.04em'
            }}
          >
            I'm just{' '}
            <span className="italic text-[var(--red)]" style={{ fontWeight: 400 }}>
              getting started.
            </span>
          </h2>

          <div className="grid grid-cols-3 gap-12 pt-12 border-t border-[var(--line)]">
            <div>
              <h4 className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mb-4">
                Looking for
              </h4>
              <ul className="space-y-2 font-['Source_Serif_4'] text-[15px] leading-[1.7] text-[var(--ink-soft)]">
                <li>Mid-level Product Designer</li>
                <li>UX Researcher with design exposure</li>
                <li>UX Designer-Researcher hybrid</li>
                <li>Roles where research has a seat at the table</li>
              </ul>
            </div>

            <div>
              <h4 className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mb-4">
                Industries that fit
              </h4>
              <ul className="space-y-2 font-['Source_Serif_4'] text-[15px] leading-[1.7] text-[var(--ink-soft)]">
                <li>AI-native product companies</li>
                <li>Design tooling, dev tools</li>
                <li>Community platforms</li>
                <li>Healthtech, edtech with consumer surface</li>
              </ul>
            </div>

            <div>
              <h4 className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mb-4">
                Not for me
              </h4>
              <ul className="space-y-2 font-['Source_Serif_4'] text-[15px] leading-[1.7]">
                <li className="line-through text-[var(--red)]">Defense, weapons, surveillance</li>
                <li className="line-through text-[var(--red)]">Predatory finance, MLM</li>
                <li className="line-through text-[var(--red)]">"Rockstar," "ninja," work-hard-play-hard</li>
                <li className="line-through text-[var(--red)]">Pure-execution UI titles</li>
              </ul>
            </div>
          </div>
          

          <div className="flex items-center justify-between mt-16 pt-8 border-t border-[var(--line)]">
            <div className="flex gap-10">
              {[
                { label: 'Email', sub: 'reach out', href: 'mailto:izzy@example.com' },
                { label: 'LinkedIn', sub: 'verify', href: '#' },
                { label: 'GitHub', sub: 'proof', href: '#' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group border-b border-transparent hover:border-[var(--red)] transition-all pb-1"
                >
                  <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)] group-hover:text-[var(--red)] transition-colors">
                    {link.label}
                  </div>
                  <div className="font-['JetBrains_Mono'] text-[9px] tracking-[0.06em] text-[var(--ink-muted)] group-hover:text-[var(--red)]/60 transition-colors">
                    {link.sub}
                  </div>
                </a>
              ))}
            </div>
            <div className="font-['JetBrains_Mono'] text-[10px] text-[var(--ink-muted)]">
              © 2026 Izzy Stephens
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}