**How I Found Goblins** 

(and Then Helped Them Find Their Users) 

A UX Research Case Study 

**Izzy Stephens** 

UX Researcher 

Goblins (secretgoblin.com) is a gaming-focused social connection platform designed to help gamers, particularly introverts, find gaming partners and friends. This case study covers the platform's first formal usability study, from how I joined the team to what I found when I finally put it in front of real users.  
**Contents** 

01 **The Setup** 

How I found Goblins and earned my seat 

02 **The Problem** 

What nobody had tested yet 

03 **The Constraints** 

Budget, timeline, and losing both supervisors 

04 **Study Design** 

Why I scoped broad, and what I built 

05 **The AI Behind the Profiles** 

Rewriting the LLM prompt that reviews every user 

06 **Running the Study** 

Five participants, eight hours, one very late night 

07 **Synthesis** 

136 quotes, 11 clusters, and how I got there 

08 **Findings** 

The four things the platform needs to hear 

09 **Delivering the Research** 

Presenting to a founder who built what you're critiquing 

10 **Reflections** 

What I learned, what I'd change  
**SECTION 01** 

**The Setup** 

In February 2025, I was in my first semester of college taking an intro to UX class, and for my course project I was assigned to build a native dating app prototype with full creative control over the concept. I decided to make an app called Icebreaker, where the whole premise was incorporating games to help people connect on a deeper level before going out on a date. 

I started doing market research to find direct and indirect competitors, which turned out to be harder than I expected. After several creative Google searches, I came across a platform called Date Like Goblins, and it was the closest thing to what I was designing. I signed up and created a profile, and since I was married, signing up for dating platforms felt a little odd so I put it right in my bio that I'm doing UX research for a school project. 

A few days later, I got an email from the founder, Lise, who wanted to team up. Apparently her developer at the time had advised her to bring on a UX designer, not just a UI or graphic designer. I accepted, started hanging out in the Goblins Discord, and attended the mod meetings for several months while development was quiet. 

I was very up front and honest about my experience level because I was a first-semester UX student, but I also stood my ground with confidence that I could do what I said I could for them. I stuck with it, offered my insights when they were relevant, and let being part of Goblins drive how much I tried to absorb from my coursework since being with them wasn't just a line on my resume but a reason to learn faster. 

When Lise started bringing more people onto the team, I was invited to join their Slack, though at that point I didn't have an official contract or equity agreement yet. Once I proved I could keep up with the others and they truly started to see my worth, I was officially brought onto the team in August 2025 as an equity-only UX consultant with the understanding that school comes first. 

I didn't put in much tangible UX output during that period, but I did advise Lise on several business decisions. One of the bigger ones was the platform's identity pivot. I noticed a consistent pattern: people would hear about the platform and say something like, "that's a really cool idea, but I'm already in a relationship." I realized there was more value the platform could offer as a gamers-meeting-gamers space, not just a place to go on video game dates. I brought this up in a mod meeting when the topic was already relevant, tested the waters, got the mods to agree, and Lise followed suit. The platform dropped "Date" from the name and became just Goblins.  
In January 2026, I started my work-based learning credit with Goblins, and that's when the real research work began.  
**SECTION 02** 

**The Problem** 

Goblins had been around for about three years by the time I started my semester, but it was still in beta with a small, engaged community in Discord, a founder who had built and maintained it with a single developer in her spare time, and a clear vision for what it could be. What it didn't have was any formal user research — no usability testing, no structured feedback, no data on where users were struggling or dropping off, and the platform had never been put in front of a real user and watched. 

Lise and even my professor suggested I focus the study on just the scheduling section, but I pushed back on that because the scheduling flow wasn't where the biggest friction was. If someone made it all the way to scheduling, they'd already survived sign-up, profile creation, the AI profile review, and search, and those earlier touchpoints were where the first impressions happened and where the biggest risk of drop-off lived. 

If I had to pick just one flow, it would have been sign-up because that's the user's first contact with the platform, and first impressions aren't forgiving. But I didn't want to pick just one since this was the platform's first study ever, and I wanted to cover a lot of ground, find the biggest pain points, and give the team a real picture of the full user experience. I knew it was ambitious for a five-participant moderated study, but I went broad anyway.  
**SECTION 03** 

**The Constraints** 

This study didn't happen in a well-resourced lab with a full research team behind it, so here's what I was actually working with. 

**Timeline** 

Sixteen weeks for the full semester, from study design through analysis and presentation — that included building the screener, recruiting participants, running a pilot, conducting five sessions, coding 136 quotes, building an affinity diagram, and creating a stakeholder presentation, and I did all of it solo. 

**Budget** 

Virtually none. I received a small monthly stipend, but there was no dedicated research budget, and I eventually convinced Lise to offer participants a $20 gift card for their time, which was a win in itself. 

**Team** 

The two people who were supposed to be my supervisors for work-based learning were both let go on the same day, one week after I started my semester. That flipped my expectations because I'd been looking forward to working closely with them, and suddenly they were gone. Lise took over as my supervisor, and I adapted to the change in guidance and leadership. I also had access to a senior UX designer mentor I could meet with about once a week, who gave me critical feedback, particularly on my facilitation approach, but all the study work itself was done by me. 

**Stakeholder education** 

There was a learning curve at the start because Lise didn't have a clear picture of what a usability study actually was. She initially thought it was more like asking users which color they prefer. We had some back-and-forth confusion while setting things up, and in hindsight I wish I'd done a better job explaining the process upfront so we could've avoided that friction. 

**Participant access**  
I recruited through the Goblins Discord and through my class Teams channel, and my goal was to have at least two of my five participants come from outside the Discord community, but I ended up with only one external participant. It worked out since several of the Discord recruits hadn't had much real experience on the platform, but that recruitment mix is something I'd approach differently next time.  
**SECTION 04** 

**Study Design** 

**Why moderated, why qualitative** 

I chose moderated sessions because I wanted a more interactive approach focused on qualitative data, and I wanted to watch people use the platform in real time, hear their thought process, and ask follow-up questions when something unexpected came up. It was also the most budget-friendly option since all I needed was Google Meet and a screen recording. 

**Scope: sign-up through scheduling** 

I scoped the study to cover the full primary user journey, from creating an account to booking a gaming session. That's a lot of ground for a single study, and both Lise and my professor questioned whether I should narrow it down. But the platform had never been tested at all, so I wanted to cast a wide net, find the biggest pain points wherever they lived, and give the team a real baseline to work from. A narrowly scoped study on scheduling would have missed the sign-up friction entirely, and that turned out to be where several of the most critical issues were. 

**The screener** 

I built a Google Forms screener and posted it in the Goblins Discord and my class Teams channel, asking about age, gender, gaming habits, platform familiarity, accessibility needs, language and timezone, comfort with being recorded, and preferred contact information. I wasn't filtering for a specific archetype but looking for variety across a small sample size, and I wanted to make sure participants were comfortable with the study format before scheduling them. 

**Participant selection** 

From the responses, I deliberately selected for demographic and experiential diversity and ended up with two women, two men, and one nonbinary person. I intentionally chose Jeffrey, who was older than the rest of the pool, because I wanted representation across age groups, and it was a happy accident that two of my participants were international and from different cultural backgrounds, which turned out to surface an important finding around cultural assumptions in the platform's design. 

**I'd like to introduce you to the five people I talked to:**  
**ID Name Profile** 

P1 Shea Fairly new to Goblins, games a couple hours a day, usually finds fellow gamers in Discord servers. ReallP2 Jac From the UK, works hospitality with no fixed schedule. Games daily in the late hours, usually going to beP3 Jeffrey UX writer in his 50s, games 4-5 hours a day. Did everything he could to break expectations and find edgeP4 Jendy Games 2-3 times per week and loves playing with her daughter. Brought a great international perspectiveP5 Korin Lifelong gamer spending at least 5 hours a day gaming. Loves playing cozy games on PC and Switch. Le

**The pilot** 

Before running the external sessions, I did a pilot study with Chris, a senior UX designer on the Goblins team, and the pilot taught me two important things. First, I'd originally planned to include the LLM profile approval flow in the study, but the pilot made it clear that would take far too long since users would have to write a real bio, submit it, wait for the AI to review it, potentially revise and resubmit, which is its own study. I wrote up a document for participants with a premade bio that would pass on the first try so we could keep moving through the flow. 

Second, Chris encouraged me to stop participants more often to ask questions because in the pilot I'd been letting people move through the flow without interrupting much, and I was missing opportunities to understand their thinking. That feedback changed how I facilitated every session after.  
**SECTION 05** 

**The AI Behind the Profiles** 

This section isn't about the usability study directly but about a separate piece of work I did for Goblins that I think says something about how I approach problems. 

Goblins uses an LLM-based system to review and score every user profile before it goes live on the platform. The idea is quality control: make sure profiles are genuine, safe, and give other users enough signal to decide if they want to connect. When Lise handed me the prompt, I asked her what she'd done to test it. She said she hadn't, so I took it over. 

There were several problems. The original prompt was biased toward extroversion and anecdotal specificity, which meant it rewarded storytelling, humor, and high-energy tone while profiles that were calm, values-driven, or introspective were scored lower even when they were socially clear and safe. Concise profiles were being labeled "underdeveloped" regardless of how coherent they were. The feedback tone didn't match the scoring either: profiles that scored well enough to be approved were still getting overly critical feedback, which created a bad first experience for users who had actually passed. 

**What I changed** 

I expanded the definition of specificity to include values, communication style, emotional boundaries, and interaction preferences because not everyone expresses themselves through stories and humor, and the scoring system needed to recognize that. I introduced the concept of "emotional predictability" as a core metric: can you predict what interacting with this person will feel like? That shifted the evaluation from "Is this profile entertaining?" to "Is this person connectable?" 

I added explicit protections for neurodivergent communication styles because the original prompt essentially said profiles needed to "paint a picture with their words" of what it would be like to know them, which is a high bar that assumes a very specific way of writing. Neurodivergent individuals, especially people on the spectrum, might write in a more flat and straightforward way, which doesn't mean their profile is low quality, so I built in contingency for different writing styles so the system wouldn't penalize people for not performing warmth. 

I also introduced an approval-based feedback system where profiles scoring 4-5 get approved with minimal, affirming feedback, and profiles scoring 1-3 get clear, directive guidance on what needs to change. An internal approval flag, hidden from the user, determines the tone and density of feedback before it's generated, which fixed the mismatch between score and  
feedback that the original prompt had. 

I validated the changes using targeted test profiles: introspective ones, concise ones, humor-heavy ones, profiles with strong tone but weak structure, and profiles that should fail on safety, and the refined prompt scored more accurately across the board, promoted strong but quiet profiles appropriately, and stopped over-critiquing users who had already passed. 

**Why this matters for the case study** 

This work happened outside the usability study, but it shows how I think about systems. A profile review prompt isn't a UX deliverable in the traditional sense, but it directly shapes the user experience since every person who signs up for Goblins interacts with this system. If it's biased, unclear, or inconsistent, that's a UX problem whether or not it lives in a Figma file.  
**SECTION 06** 

**Running the Study** 

The pilot with Chris ran on March 8, 2026, and the five participant sessions ran from March 15 to March 19, with each session about an hour long, conducted over Google Meet with screen recording and think-aloud protocol. 

I facilitated every session myself with a consistent format: participants started from the sign-up page and worked through account creation, profile setup, browsing and searching for other users, and booking a session. I gave them a premade bio to bypass the LLM review (based on what I'd learned in the pilot) and asked them to think out loud throughout. 

One night, I ran sessions back to back from 9 PM to 12:30 AM with only a 15-minute break in between, and that's a facilitation boundary I wouldn't repeat because by the end I was running on caffeine and adrenaline, and while the data from those sessions was still solid, I wasn't at my sharpest for follow-up questions. 

**What surprised me** 

The biggest surprise was Halfling mode, and Goblins has three visibility modes: Normal (photos visible to everyone), Goblin (no photos, fully anonymous), and Halfling (photos visible to your connections only). I expected some confusion around Halfling, but I wasn't expecting all five participants to have roughly the same misread where every single one assumed Halfling worked the opposite way: that your photos would be hidden by default and revealed after connecting, not visible by default and hidden from non-connections. 

"From my understanding, halfling meant: if we matched, I like them, they like me, then it would show for that person." 

**P5, Korin** 

"I connect with that person, then I see the picture. The interest wasn't how that person looks. I'm not here for the superficial things. I'm here for the love for video games." 

**P4, Jendy** 

"That's the opposite of what I expect. If I want to be more private then I'd rather have them off by default." 

**P3, Jeffrey**  
The other surprise was the LLM profile review, and I expected participants to have a stronger reaction to receiving AI-generated feedback on their profile, but most of them glossed right over it since nobody picked up on or pointed out that the feedback sounded like it was written by AI — it just passed by.  
**SECTION 07** 

**Synthesis** 

After the sessions wrapped, I watched back through all the recordings, which was about eight hours of video, and I extracted every meaningful quote and observation, tagging each one with the participant, timestamp, the section or page where it happened, the sentiment, and a potential theme. That produced 136 coded quotes. 

From there I built an affinity diagram, grouping the quotes into clusters based on the themes I'd been tagging, and eleven clusters emerged. Some were clearly dominant since the Halfling mode confusion showed up across all five participants with near-identical language, while others were more scattered but still meaningful, like cultural assumptions embedded in the profile questions. 

I prioritized based on two factors: how many participants the issue affected and how much impact it had on the user's ability to move through the platform. The four clusters that rose to the top became my primary findings, and the rest I filed as honorable mentions because I felt they shouldn't be overlooked even if they weren't the loudest signals. 

**How I used AI in synthesis** 

I used Claude as a synthesis tool during this phase, and I want to be transparent about what that looked like. 

All primary research was mine — I designed and facilitated every session, wrote the discussion guide, recruited participants, and managed the staging environment. After the sessions, I personally reviewed the recordings and coded the 136 quotes by hand, and that coded dataset was the foundation. 

What Claude handled was the labor-intensive parts of organizing that data: reading across large volumes of transcript text, grouping observations into clusters, and building interactive reference tools I could use during synthesis. It flagged patterns as new layers were added, like the consistency of the Halfling mode misread across all five participants, which was useful pattern confirmation, but I'd already seen it emerging during the sessions themselves. 

What Claude didn't do was make research decisions — it didn't decide what counted as a finding, how findings should be framed, which clusters warranted their own category versus being folded into another, or how to handle the strategic implications of what the data showed. The distinction between UX findings and strategic observations was something I set up, not something Claude initiated, and I also deliberately excluded the pilot session from synthesis  
since Chris's feedback as a senior UX designer carries different evidentiary weight than external participant data. 

Claude made the process faster, but I made the process accurate.  
**SECTION 08** 

**Findings** 

Four findings rose to the top, and I'm presenting them in priority order based on severity and breadth of impact. After the four, I'll cover the honorable mentions and the strategic layer underneath all of it. 

**Finding 1: Halfling Mode — Universal Misread** 

All five participants interpreted Halfling mode the same way, and all five were wrong. They assumed it meant their photos would be hidden by default and revealed after forming a connection, but the actual behavior is the opposite: photos are visible to everyone and hidden from non-connections only after the user opts in. 

This wasn't a minor misunderstanding but rather every participant having an immediate, confident interpretation that happened to be backwards. When told how it actually works, reactions ranged from confusion to mild discomfort, and several participants said they preferred the version they'd imagined. 

"Halfling is essentially friends-only mode. If you haven't done that mechanism, friends or have you, it won't show." 

**P3, Jeffrey** 

"I would like the opposite. I met this person and I like the bio, I like the games. After we become friends, the intention is met, we can see each other." 

**P4, Jendy** 

This finding is sensitive because Halfling mode is a feature the founder feels strongly about, and my approach was to let the data lead. Five out of five participants reading it the same way isn't a sample-size problem but rather a signal that the mental model users bring to this feature doesn't match the one it was built on. 

**Finding 2: Navigation and Wayfinding** 

There was a system-wide gap in feedback where users couldn't tell where they were in the platform, whether their actions had registered, or how to get back. Save states were unclear, progress indicators were missing, and the back button behavior was unpredictable.  
"I might not have known what that did unless I was very observant. I don't think a normal person would be able to see this trash can icon." 

**P1, Shea** 

"There's no done. There's no way to get out of here. No exit. There's no progress bar." **P3, Jeffrey** 

This is a foundational issue because it doesn't matter how good the profile questions are or how smart the matching system is if users can't navigate with confidence. Wayfinding problems compound since each small moment of confusion erodes trust, and users start second-guessing whether their inputs were saved or whether they're in the right place. 

**Finding 3: Profile Copy and Terminology** 

The profile questions weren't wrong, but the language around them created confusion since terms like "Yearbook Quote" and "Ultimate Goblin Mode" and "My Icks" landed differently depending on the participant's age, cultural background, and familiarity with internet slang. Some participants found the tone charming while others had to guess what was being asked. 

The issue isn't that the platform has personality because the personality is part of what makes it work, but rather that the copy assumes a shared cultural vocabulary that not all users have. When a profile question is unclear, users either skip it, give a generic answer, or lose confidence in the platform's professionalism. 

**Finding 4: Identity, Culture, and Accessibility** 

Goblins wants to serve a diverse community, but parts of the experience assume a specific cultural background, and the most pointed observation came from Jendy, who raised a concern about the neurodivergence question on the profile. Being asked to disclose neurodivergence on a social platform carries different weight depending on where you are, who might see it, and whether that disclosure could affect how you're treated, which is a safety consideration, not just a UX one. 

There were also smaller moments across sessions: assumptions about timezone (defaulting to US time), the game directory skewing toward Western titles, and accessibility considerations for users with different needs. Individually these are small, but together they signal that the platform's default user is more narrowly defined than the community it wants to build. 

**Honorable Mentions**  
Several findings didn't make the top four but shouldn't be ignored. Photo upload friction was significant since three out of five participants missed the Polaroid frame as a clickable upload target. The game directory had gaps with no feedback when a game wasn't found and no way to submit missing titles. Search filter categories didn't match what participants were looking for since they wanted filters for gamer type, timezone, last active status, and genre, not just specific game titles. The availability structure didn't fit how people actually live, especially those with irregular schedules, and essential profile information was hidden below the fold. 

**The Strategic Layer: Platform Identity** 

This one isn't a UX finding but a strategic observation, and I separated it deliberately because it requires a different kind of decision than fixing a navigation pattern or rewriting profile copy. 

Without prompting, participants said the same thing: they are not primarily here for dating but to find gaming partners and friends. The platform's value proposition, in the users' own words, is connection through shared gaming interests, not romance, and a dating feature might still have a place, but the core identity that users are responding to is something broader. 

"I really like this premise. I grew up with the internet. I remember having a MySpace and meeting people like through that." 

**P5, Korin** 

My recommendation wasn't to kill the dating angle but to clearly define the target audience and the platform's primary goals before making structural decisions since painting too broad a brush too early risks diluting the platform's personality before the core audience is fully served.  
**SECTION 09** 

**Delivering the Research** 

The presentation happened on April 26, 2026, and I'd invited the full team so everyone would receive the same information at the same time. Lise, Zoe, and Rebecca attended while the others caught the recording later. 

I structured the presentation to mirror the way I'd thought about the work: methodology and participants first, what's working so the team could hear the wins before the friction, the four prioritized findings with Halfling mode at the center because it had the strongest evidence, honorable mentions, the strategic identity layer, what the study didn't cover, and a set of "how might we" questions to seed the brainstorming that would follow. 

**How Halfling mode landed** 

I went in expecting pushback since Lise had built Halfling mode on a model that came from her experience with dating apps: hide photos until interest is established, and you get ghosted when the reveal happens, so the current behavior was deliberate, not accidental. 

When I presented the finding, Lise made the case for the current design by referencing the dating-app pattern and noting that user-stated preferences don't always reflect what's best for them long-term. 

I pushed back because the lens of dating apps doesn't necessarily apply to gamers, who tend to care more about personality and shared interests than appearance. Several participants flagged the privacy logic specifically as a safety concern, not a vanity one, since they wanted control over who saw their face for reasons that had nothing to do with attraction. 

The conversation didn't end with full agreement, but it ended with movement since Lise said she'd put Halfling mode on ice and pivot to a simpler two-mode system: full visibility or full anonymity with avatars, which is where the data was pointing and was a meaningful shift from where she started. 

**The dating conversation** 

The strategic finding around platform identity sparked the longest discussion of the meeting, and Lise made a case I hadn't anticipated. Keeping dating visible as a stated intention isn't about marketing but about safety enforcement. If a man signs up claiming to be there for friends and then pursues women, the platform has no clear basis for removing him, so listing dating as an explicit option creates accountability for bad-faith actors.  
That's a real argument, and I said so, but I also pushed on the tradeoff. If the platform's most pressing problem right now is getting more women to sign up, and the dating affiliation is a key reason women aren't signing up, the safety mechanism designed to protect them might be the same thing keeping them out. Lise's response was direct: she wasn't willing to fix a marketing problem by creating a larger one, which is fair. 

Zoe found a useful middle position where the presence of dating shouldn't be hidden, but the way it shows up in the platform should be intentional. Right now, selecting "dating" as your intent unlocks a fully featured profile, while "friends" or "one-off gaming" leaves you with a stripped-down version, and that asymmetry is part of why the platform reads as a dating app even to users who don't want one. 

The conversation didn't resolve the dating question, but it surfaced something more important: Lise articulated, for the first time in front of the full team, that her long-term vision isn't really about gaming since gaming is a "beach head," in her words. The actual vision is a "phone book of the internet" for finding authentic people, with gaming as the proof point that the model works, and that's the kind of strategic clarification I'd been hoping to pull out of this study, though it didn't come from a finding but from the conversation around one. 

**What got actioned** 

Three concrete things moved by the end of the meeting: Halfling mode was deprioritized in favor of a two-mode system, Goblins University (the platform's dating course) was scheduled for a rename to distance the brand from dating-app associations, and Zoe explicitly adopted the MVP framing from one of my "how might we" questions as a guiding principle for her design work going forward. 

Other suggestions — "available now" status, time zone filtering, online-now indicators, accessibility improvements — were flagged for the redesign without firm commitments, which is normal since the point of the study wasn't to lock decisions on every issue but to give the team a real picture of where users were struggling and a shared vocabulary for talking about it. 

**What I took from it** 

The Halfling mode shift didn't happen because I made a stronger argument than Lise but because five participants gave the same independent answer, and that data was hard to argue with once it was clearly in the room. 

The dating conversation went differently since Lise's argument for keeping dating wasn't defensive but accounted for a safety dimension I hadn't considered, and acknowledging that openly was more useful than holding my ground. The most productive moment in the whole presentation wasn't a finding being accepted but the founder articulating, for the first time in  
front of the full team, what she actually wants to build, which wasn't what I expected to walk away with but might be the most valuable thing I delivered.  
**SECTION 10** 

**Reflections** 

This was my first professional usability study, and I want to name that directly because I think it matters for context and because I'm not interested in pretending otherwise. 

Everyone starts somewhere, but not a lot of people start here. I designed a study that covered the full user journey of a live platform, recruited and selected a diverse participant pool, facilitated five moderated sessions solo, hand-coded 136 quotes from eight hours of recordings, built a synthesis framework from scratch, and delivered findings to a founder who built the thing I was critiquing — all in a sixteen-week semester, with no research budget, no team, and a supervisor change in the first week. 

**What I'd change** 

I'd recruit more participants from outside the Goblins community since four out of five came from the Discord. While their feedback was valuable and several hadn't used the platform much, my original goal was to have at least two true outsiders. One out of five isn't enough to confidently say how a first-time user with zero context would experience the platform. 

I'd set stricter time boundaries for sessions since running studies from 9 PM to 12:30 AM with a 15-minute break isn't sustainable, and I could feel it affecting my follow-up questions by the end of the night. Participant scheduling is hard enough without sacrificing your own sharpness. 

I'd invest more time upfront in stakeholder education because the early confusion with Lise about what a usability study actually entails could've been avoided with a better kickoff conversation, and I've since learned that aligning on methodology before you start designing the study saves time and friction later. 

**What I learned** 

I learned that the most useful research skill isn't any specific method but knowing how to sit with data that might be uncomfortable for the people who need to hear it and figure out how to deliver it in a way that creates movement instead of defensiveness. The Halfling mode finding was the hardest one to frame, not because the data was ambiguous but because I knew how attached the founder was to the feature, and letting the data lead while holding back my own recommendations until I could read the room was a deliberate choice that I'd make again. 

I also learned that I work well under constraints that would make most people quit since losing both supervisors in the first week could've derailed the whole semester, but instead I adapted,  
kept going, and produced work that earned the trust of everyone I collaborated with. I don't say that to be self-congratulatory but because the ability to keep moving when things fall apart is, in my experience, the thing that separates people who do research from people who do good research. 

I earned where I am now, and I'm just getting started.