import type { ReactNode } from 'react';
import NeoLayout from '../components/neo/NeoLayout';
import NeoCaseStudyNav from '../components/neo/NeoCaseStudyNav';
import NeoStatCard from '../components/neo/NeoStatCard';
import NeoParticipantChip from '../components/neo/NeoParticipantChip';
import NeoFindingCallout from '../components/neo/NeoFindingCallout';
import NeoPullQuote from '../components/neo/NeoPullQuote';
import NeoPlaceholderBox from '../components/neo/NeoPlaceholderBox';

const participants = [
  { id: 'P1', name: 'Shea', desc: 'Fairly new to Goblins, games a couple hours a day' },
  { id: 'P2', name: 'Jac', desc: 'From the UK, works hospitality with no fixed schedule' },
  { id: 'P3', name: 'Jeffrey', desc: 'UX writer in his 50s, games 4-5 hours a day' },
  { id: 'P4', name: 'Jendy', desc: 'Games 2-3 times per week, loves playing with her daughter' },
  { id: 'P5', name: 'Korin', desc: 'Lifelong gamer spending at least 5 hours a day gaming' },
];

const actioned = [
  { lead: 'Halfling mode:', body: 'Deprioritized in favor of a two-mode system (full visibility or full anonymity)' },
  { lead: 'Goblins University:', body: 'Scheduled for rename to distance the brand from dating-app associations' },
  { lead: 'MVP framing:', body: 'Explicitly adopted as a guiding principle for design work going forward' },
  { lead: 'Other improvements:', body: 'Available now status, timezone filtering, and accessibility flagged for redesign' },
];

function P({ children }: { children: ReactNode }) {
  return (
    <p className="font-['Montserrat'] text-[15px] sm:text-[16px] leading-[1.7] text-[var(--ink-soft)] mb-4">
      {children}
    </p>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-['Montserrat'] font-semibold text-[20px] sm:text-[22px] mb-3 mt-6">{children}</h3>;
}

export default function GoblinsCaseStudyPage() {
  return (
    <NeoLayout>
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-10 pt-10 sm:pt-16 pb-16">
        <div className="bg-[var(--pink)] border-2 border-[var(--ink)] rounded-[5px] p-8 sm:p-16 shadow-[10px_10px_0px_0px_var(--teal)]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6">
            {['UX Research', 'Solo', '16 weeks', '2026'].map((tag, i) => (
              <span key={tag} className="flex items-center gap-3">
                {i > 0 && <span className="font-['JetBrains_Mono'] text-[10px]">·</span>}
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em]">{tag}</span>
              </span>
            ))}
          </div>

          <h1 className="font-['Bruno_Ace'] text-[28px] sm:text-[44px] leading-[1.2] tracking-[-0.01em] mb-10">
            How I Found Goblins (and Then Helped Them Find Their Users)
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-10 pb-10 border-b-2 border-[var(--ink)]">
            {[
              { number: '5', label: 'Participants', context: 'recruited & selected' },
              { number: '8h', label: 'Recordings', context: 'watched back in full' },
              { number: '136', label: 'Coded quotes', context: 'extracted & tagged' },
              { number: '4', label: 'Priority findings', context: 'from 11 clusters' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-['Bruno_Ace'] text-[26px] sm:text-[30px] mb-1">{stat.number}</div>
                <div className="font-['JetBrains_Mono'] uppercase text-[9px] sm:text-[10px] tracking-[0.14em] mb-1">
                  {stat.label}
                </div>
                <div className="font-['JetBrains_Mono'] text-[9px] tracking-[0.06em] text-[var(--ink-muted)]">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Montserrat'] text-[17px] sm:text-[19px] leading-[1.6] italic">
            Goblins is a gaming-focused social connection platform designed to help gamers, particularly
            introverts, find gaming partners and friends. This case study covers the platform's first formal
            usability study, from how I joined the team to what I found when I finally put it in front of real
            users.
          </p>
        </div>
      </section>

      {/* Content with sticky nav */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-10 pb-24">
        <div className="flex gap-12">
          <NeoCaseStudyNav />

          <div className="flex-1 max-w-[760px]">
            <div id="the-setup" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">The Setup</h2>
              <P>
                In February 2025, I was in my first semester of college taking an intro to UX class, and for my
                course project I was assigned to build a native dating app prototype with full creative control
                over the concept. I decided to make an app called Icebreaker, where the whole premise was
                incorporating games to help people connect on a deeper level before going out on a date.
              </P>
              <P>
                I started doing market research to find direct and indirect competitors, which turned out to be
                harder than I expected. After several creative Google searches, I came across a platform called
                Date Like Goblins, and it was the closest thing to what I was designing. I signed up and created
                a profile, and since I was married, signing up for dating platforms felt a little odd so I put it
                right in my bio that I'm doing UX research for a school project.
              </P>
              <P>
                A few days later, I got an email from the founder, Lise, who wanted to team up. Apparently her
                developer at the time had advised her to bring on a UX designer, not just a UI or graphic
                designer. I accepted, started hanging out in the Goblins Discord, and attended the mod meetings
                for several months while development was quiet.
              </P>
              <P>
                I was very up front and honest about my experience level because I was a first-semester UX
                student, but I also stood my ground with confidence that I could do what I said I could for them.
                When Lise started bringing more people onto the team, I was invited to join their Slack. Once I
                proved I could keep up with the others and they truly started to see my worth, I was officially
                brought onto the team in August 2025 as an equity-only UX consultant with the understanding that
                school comes first.
              </P>
            </div>

            <div id="the-problem" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">The Problem</h2>
              <P>
                Goblins had been around for about three years by the time I started my semester, but it was
                still in beta with a small, engaged community in Discord, a founder who had built and maintained
                it with a single developer in her spare time, and a clear vision for what it could be. What it
                didn't have was any formal user research — no usability testing, no structured feedback, no data
                on where users were struggling or dropping off, and the platform had never been put in front of a
                real user and watched.
              </P>
              <P>
                Lise and even my professor suggested I focus the study on just the scheduling section, but I
                pushed back on that because the scheduling flow wasn't where the biggest friction was. If someone
                made it all the way to scheduling, they'd already survived sign-up, profile creation, the AI
                profile review, and search, and those earlier touchpoints were where the first impressions
                happened and where the biggest risk of drop-off lived.
              </P>
            </div>

            <div id="the-constraints" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">The Constraints</h2>
              <P>
                This study didn't happen in a well-resourced lab with a full research team behind it, so here's
                what I was actually working with.
              </P>

              <H3>Timeline</H3>
              <P>
                Sixteen weeks for the full semester, from study design through analysis and presentation — that
                included building the screener, recruiting participants, running a pilot, conducting five
                sessions, coding 136 quotes, building an affinity diagram, and creating a stakeholder
                presentation, and I did all of it solo.
              </P>

              <H3>Budget</H3>
              <P>
                Virtually none. I received a small monthly stipend, but there was no dedicated research budget,
                and I eventually convinced Lise to offer participants a $20 gift card for their time, which was a
                win in itself.
              </P>

              <H3>Team</H3>
              <P>
                The two people who were supposed to be my supervisors for work-based learning were both let go on
                the same day, one week after I started my semester. That flipped my expectations because I'd been
                looking forward to working closely with them, and suddenly they were gone. Lise took over as my
                supervisor, and I adapted to the change in guidance and leadership.
              </P>
            </div>

            <div id="study-design" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">Study Design</h2>

              <H3>Why moderated, why qualitative</H3>
              <P>
                I chose moderated sessions because I wanted a more interactive approach focused on qualitative
                data, and I wanted to watch people use the platform in real time, hear their thought process, and
                ask follow-up questions when something unexpected came up. It was also the most budget-friendly
                option since all I needed was Google Meet and a screen recording.
              </P>

              <H3>Scope: sign-up through scheduling</H3>
              <P>
                I scoped the study to cover the full primary user journey, from creating an account to booking a
                gaming session. That's a lot of ground for a single study, and both Lise and my professor
                questioned whether I should narrow it down. But the platform had never been tested at all, so I
                wanted to cast a wide net, find the biggest pain points wherever they lived, and give the team a
                real baseline to work from.
              </P>

              <H3>Meet the participants</H3>
              <div className="flex flex-wrap gap-4 mt-2">
                {participants.map((p) => (
                  <NeoParticipantChip key={p.id} id={p.id} name={p.name} description={p.desc} />
                ))}
              </div>
            </div>

            <div id="the-ai-behind-the-profiles" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">The AI Behind the Profiles</h2>
              <P>
                This section isn't about the usability study directly but about a separate piece of work I did
                for Goblins that I think says something about how I approach problems.
              </P>
              <P>
                Goblins uses an LLM-based system to review and score every user profile before it goes live on
                the platform. The idea is quality control: make sure profiles are genuine, safe, and give other
                users enough signal to decide if they want to connect. When Lise handed me the prompt, I asked
                her what she'd done to test it. She said she hadn't, so I took it over.
              </P>
              <P>
                The original prompt was biased toward extroversion and anecdotal specificity, which meant it
                rewarded storytelling, humor, and high-energy tone while profiles that were calm, values-driven,
                or introspective were scored lower even when they were socially clear and safe. Concise profiles
                were being labeled "underdeveloped" regardless of how coherent they were.
              </P>

              <H3>What I changed</H3>
              <P>
                I expanded the definition of specificity to include values, communication style, emotional
                boundaries, and interaction preferences because not everyone expresses themselves through stories
                and humor, and the scoring system needed to recognize that. I introduced the concept of
                "emotional predictability" as a core metric: can you predict what interacting with this person
                will feel like?
              </P>
              <P>
                I added explicit protections for neurodivergent communication styles and introduced an
                approval-based feedback system where profiles scoring 4-5 get approved with minimal, affirming
                feedback, and profiles scoring 1-3 get clear, directive guidance on what needs to change.
              </P>
            </div>

            <div id="running-the-study" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">Running the Study</h2>
              <P>
                The pilot with Chris ran on March 8, 2026, and the five participant sessions ran from March 15 to
                March 19, with each session about an hour long, conducted over Google Meet with screen recording
                and think-aloud protocol.
              </P>
              <P>
                I facilitated every session myself with a consistent format: participants started from the
                sign-up page and worked through account creation, profile setup, browsing and searching for other
                users, and booking a session. I gave them a premade bio to bypass the LLM review (based on what
                I'd learned in the pilot) and asked them to think out loud throughout.
              </P>
              <P>
                One night, I ran sessions back to back from 9 PM to 12:30 AM with only a 15-minute break in
                between, and that's a facilitation boundary I wouldn't repeat because by the end I was running on
                caffeine and adrenaline, and while the data from those sessions was still solid, I wasn't at my
                sharpest for follow-up questions.
              </P>

              <H3>What surprised me</H3>
              <P>
                The biggest surprise was Halfling mode. Goblins has three visibility modes: Normal (photos
                visible to everyone), Goblin (no photos, fully anonymous), and Halfling (photos visible to your
                connections only). I expected some confusion around Halfling, but I wasn't expecting all five
                participants to have roughly the same misread where every single one assumed Halfling worked the
                opposite way.
              </P>
            </div>

            <div id="synthesis" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">Synthesis</h2>
              <P>
                After the sessions wrapped, I watched back through all the recordings, which was about eight
                hours of video, and I extracted every meaningful quote and observation, tagging each one with the
                participant, timestamp, the section or page where it happened, the sentiment, and a potential
                theme. That produced 136 coded quotes.
              </P>
              <P>
                From there I built an affinity diagram, grouping the quotes into clusters based on the themes I'd
                been tagging, and eleven clusters emerged. Some were clearly dominant since the Halfling mode
                confusion showed up across all five participants with near-identical language, while others were
                more scattered but still meaningful.
              </P>
              <P>
                I prioritized based on two factors: how many participants the issue affected and how much impact
                it had on the user's ability to move through the platform. The four clusters that rose to the top
                became my primary findings, and the rest I filed as honorable mentions.
              </P>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                <NeoStatCard number="8h" label="Recordings" context="watched back in full" />
                <NeoStatCard number="136" label="Coded quotes" context="extracted & tagged" />
                <NeoStatCard number="11" label="Clusters" context="from affinity diagram" />
                <NeoStatCard number="4" label="Priority findings" context="selected for presentation" />
              </div>
            </div>

            <div id="findings" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">Findings</h2>
              <P>
                Four findings rose to the top, and I'm presenting them in priority order based on severity and
                breadth of impact.
              </P>

              <NeoFindingCallout tag="Finding 01 · Universal misread" title="Halfling Mode" resultLine="5 of 5 isn't a sample-size problem. It's a signal.">
                <p>
                  All five participants interpreted Halfling mode the same way, and all five were wrong. They
                  assumed it meant their photos would be hidden by default and revealed after forming a
                  connection, but the actual behavior is the opposite: photos are visible to everyone and hidden
                  from non-connections only after the user opts in.
                </p>
                <p>
                  This wasn't a minor misunderstanding but rather every participant having an immediate,
                  confident interpretation that happened to be backwards. When told how it actually works,
                  reactions ranged from confusion to mild discomfort, and several participants said they
                  preferred the version they'd imagined.
                </p>
              </NeoFindingCallout>

              <NeoPullQuote
                quote="I would like the opposite. I met this person and I like the bio, I like the games. After we become friends, the intention is met, we can see each other."
                attribution="P4 · Jendy · Session 4 · March 18, 2026"
              />

              <NeoFindingCallout tag="Finding 02 · System-wide gap" title="Navigation and Wayfinding" accent="tinted">
                <p>
                  There was a system-wide gap in feedback where users couldn't tell where they were in the
                  platform, whether their actions had registered, or how to get back. Save states were unclear,
                  progress indicators were missing, and the back button behavior was unpredictable.
                </p>
              </NeoFindingCallout>

              <NeoFindingCallout tag="Finding 03 · Terminology" title="Profile Copy and Terminology" accent="tinted">
                <p>
                  The profile questions weren't wrong, but the language around them created confusion since terms
                  like "Yearbook Quote" and "Ultimate Goblin Mode" and "My Icks" landed differently depending on
                  the participant's age, cultural background, and familiarity with internet slang.
                </p>
              </NeoFindingCallout>

              <NeoFindingCallout tag="Finding 04 · Inclusion and safety" title="Identity, Culture, and Accessibility" accent="tinted">
                <p>
                  Goblins wants to serve a diverse community, but parts of the experience assume a specific
                  cultural background. The most pointed observation came from Jendy, who raised a concern about
                  the neurodivergence question on the profile. Being asked to disclose neurodivergence on a
                  social platform carries different weight depending on where you are, who might see it, and
                  whether that disclosure could affect how you're treated.
                </p>
              </NeoFindingCallout>
            </div>

            <div id="delivering-the-research" className="py-12 border-b-2 border-[var(--ink)]/15">
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">Delivering the Research</h2>
              <P>
                The presentation happened on April 26, 2026, and I'd invited the full team so everyone would
                receive the same information at the same time. Lise, Zoe, and Rebecca attended while the others
                caught the recording later.
              </P>
              <P>
                I structured the presentation to mirror the way I'd thought about the work: methodology and
                participants first, what's working so the team could hear the wins before the friction, the four
                prioritized findings with Halfling mode at the center because it had the strongest evidence,
                honorable mentions, the strategic identity layer, what the study didn't cover, and a set of "how
                might we" questions to seed the brainstorming that would follow.
              </P>

              <H3>How Halfling mode landed</H3>
              <P>
                I went in expecting pushback since Lise had built Halfling mode on a model that came from her
                experience with dating apps: hide photos until interest is established, and you get ghosted when
                the reveal happens, so the current behavior was deliberate, not accidental.
              </P>
              <P>
                When I presented the finding, Lise made the case for the current design by referencing the
                dating-app pattern. I pushed back because the lens of dating apps doesn't necessarily apply to
                gamers, who tend to care more about personality and shared interests than appearance. The
                conversation didn't end with full agreement, but it ended with movement since Lise said she'd put
                Halfling mode on ice and pivot to a simpler two-mode system.
              </P>

              <div className="bg-[var(--bg-card)] border-2 border-[var(--ink)] rounded-[5px] p-7 sm:p-9 mt-6">
                <h3 className="font-['Montserrat'] font-semibold text-[18px] sm:text-[20px] mb-4">
                  What got actioned
                </h3>
                <ul className="space-y-4">
                  {actioned.map((item, i) => (
                    <li key={i} className="flex gap-3 pb-4 border-b border-[var(--ink)]/15 last:border-0">
                      <span className="text-[var(--red)] font-['JetBrains_Mono'] text-[12px]">✓</span>
                      <div className="flex-1 font-['Montserrat'] text-[15px] leading-[1.7]">
                        <strong>{item.lead}</strong> <span className="text-[var(--ink-soft)]">{item.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              id="reflections"
              className="py-12 px-6 sm:px-10 bg-[var(--bg-tinted)] border-2 border-[var(--ink)] rounded-[5px] -mx-6 sm:-mx-10 my-8"
            >
              <h2 className="font-['Bruno_Ace'] text-[32px] sm:text-[38px] mb-6">Reflections</h2>
              <P>
                This was my first professional usability study, and I want to name that directly because I think
                it matters for context and because I'm not interested in pretending otherwise.
              </P>
              <P>
                Everyone starts somewhere, but not a lot of people start here. I designed a study that covered
                the full user journey of a live platform, recruited and selected a diverse participant pool,
                facilitated five moderated sessions solo, hand-coded 136 quotes from eight hours of recordings,
                built a synthesis framework from scratch, and delivered findings to a founder who built the thing
                I was critiquing — all in a sixteen-week semester, with no research budget, no team, and a
                supervisor change in the first week.
              </P>

              <H3>What I'd change</H3>
              <P>
                I'd recruit more participants from outside the Goblins community since four out of five came
                from the Discord. While their feedback was valuable and several hadn't used the platform much, my
                original goal was to have at least two true outsiders.
              </P>
              <P>
                I'd set stricter time boundaries for sessions since running studies from 9 PM to 12:30 AM with a
                15-minute break isn't sustainable, and I could feel it affecting my follow-up questions by the
                end of the night.
              </P>
              <P>
                I'd invest more time upfront in stakeholder education because the early confusion with Lise about
                what a usability study actually entails could've been avoided with a better kickoff conversation.
              </P>

              <H3>What I learned</H3>
              <P>
                I learned that the most useful research skill isn't any specific method but knowing how to sit
                with data that might be uncomfortable for the people who need to hear it and figure out how to
                deliver it in a way that creates movement instead of defensiveness.
              </P>
              <P>
                I also learned that I work well under constraints that would make most people quit since losing
                both supervisors in the first week could've derailed the whole semester, but instead I adapted,
                kept going, and produced work that earned the trust of everyone I collaborated with. I earned
                where I am now, and I'm just getting started.
              </P>
            </div>

            <NeoPlaceholderBox label="[ Canva research presentation slides ]" aspect="aspect-[16/7]" />
          </div>
        </div>
      </section>
    </NeoLayout>
  );
}
