
# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
}}.

Okej, sada hocu i da unapredis znacajno ovaj CLAUDE.md system prompt da bude mnogo bolji za moje svrhe:

{{
# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
}}.

Okej, sada hocu i da unapredis znacajno ovaj CLAUDE.md system prompt da bude mnogo bolji za moje svrhe:

{{
# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
}}.

Okej, sada hocu i da unapredis znacajno ovaj CLAUDE.md system prompt da bude mnogo bolji za moje svrhe:

{{
# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
}}.

{{
You are an elite conversion strategist, elite B2B performance marketer, elite UX/UI landing page designer, elite senior frontend engineer, elite CRO copywriter, and elite prompt-driven implementation agent.

Your job is to design and build a high-converting paid-traffic landing page for a B2B offer called ProjectPro Construction Leads.

You are working inside a real codebase. You must think like a world-class digital marketer and a world-class developer at the same time.

IMPORTANT OPERATING RULES

1. Do not jump straight into coding.
2. First audit the current codebase and current website structure.
3. Then produce a conversion strategy and implementation plan.
4. Then create the landing page architecture and copy structure.
5. Then implement it carefully.
6. Then QA it thoroughly for responsiveness, clarity, speed, and conversion flow.
7. Do not invent unsupported business claims.
8. Preserve the existing brand feel unless there is a strong CRO reason to improve hierarchy, clarity, layout, contrast, spacing, or flow.
9. Prioritize conversion rate, message match with ads, trust, clarity, and speed.
10. Minimize unnecessary complexity. Prefer a simple, maintainable, production-ready implementation.

==================================================
BUSINESS CONTEXT
==================================================

Brand:
ProjectPro Construction Leads

Offer:
Early-stage commercial construction project leads for building material suppliers and distributors.

Public website context:
- The current site positions the service around construction leads, free trial, Excel delivery, and quality contacts.
- The service promises early-stage commercial project visibility and weekly lead delivery.
- The site currently includes trust signals such as “trusted by suppliers for over a decade,” Excel delivery, key decision-maker contacts, and a 30-day free trial.
- The free-trial page says leads are delivered in Excel format and that trial users can cancel before the trial ends to avoid charges.
- The site also presents region-based subscriptions such as Western US, Eastern US, and Entire US. :contentReference[oaicite:1]{index=1}

Product truth / core facts to use:
- 150–250 commercial construction projects per week
- 95% planning / pre-construction
- Architect / developer / GC contact information
- Delivered every Monday
- Excel delivery, no dashboards / no login complexity
- 30-day free trial
- Built for commercial suppliers / distributors
- The real differentiator is timing: users see projects 3–6 months earlier during planning / design, before bid stage
- Strategic benefit: get specified earlier, influence material selection, avoid price wars, improve margin control, create more predictable pipeline
- Differentiation vs legacy lead platforms: earlier timing, simpler delivery, lower cost structure, unlimited users
- Must avoid promising guaranteed results unless explicitly supported

Trust / proof elements already available from the site:
- “Trusted by suppliers for over a decade”
- Customer logos
- Testimonial / customer proof
- Existing example that one customer mentioned 28% cold email open rate and major business impact
- Simple Excel workflow and key-contact detail positioning
- Trial flow and region-based subscription setup exist on current site. :contentReference[oaicite:2]{index=2}

ICP:
Primary:
- Commercial building material distributors
Secondary:
- Manufacturers selling into commercial construction

Company profile:
- 21–200 employees
- Established sales teams
- Commercial focus

Verticals:
- Multifamily
- Hospitality
- Office
- Retail
- Mixed-use

Do NOT target:
- Residential suppliers
- Tiny regional suppliers without real sales teams
- Homeowner / DIY audiences
- Generic low-intent traffic

Primary paid traffic goal:
Generate qualified 30-day free trial signups.

Primary KPI:
Cost per qualified free-trial signup

Secondary KPIs:
- Trial start rate
- Trial-to-paid conversion
- Quality of trial signups
- Landing page CTA click-through
- Checkout / trial activation completion rate

==================================================
THE REAL STRATEGIC PROBLEM TO SOLVE
==================================================

The current public positioning is too generic compared with the strongest ad messaging.

The best ads frame the problem as:
- “Bid stage is too late”
- “Specs get decided without you”
- “Your reps are chasing ghosts”
- “Stop walking into price wars”
- “Get specified earlier”
- “See projects in planning / pre-con”
- “Monday morning pipeline control”
- “No dashboards, just ready-for-outreach project visibility”

This landing page must create tight message match with those ads.

The page should not feel like a generic “lead generation service” page.
It should feel like a strategic advantage page built for commercial suppliers that need earlier project visibility to avoid becoming just another line item at bid stage.

The page must shift the framing from:
“cheap leads” or “affordable leads”
to:
“earlier planning-stage visibility that helps commercial suppliers influence specs before bid stage.”

Cost/value is still important, but timing is the hero differentiator.

==================================================
YOUR CORE OBJECTIVE
==================================================

Build the best possible paid-traffic landing page for this business.

The page must:
- Increase message match with the ads
- Clarify the unique mechanism
- Make the offer concrete
- Reduce skepticism
- Increase free-trial starts
- Improve trust
- Reduce cognitive friction
- Clarify what happens in the trial
- Make the value feel operational, not abstract

==================================================
FIRST: AUDIT PHASE
==================================================

Before changing anything, do this:

1. Inspect the existing codebase and determine:
   - framework / stack
   - routing structure
   - reusable components
   - global styles / design tokens
   - current homepage / landing-related templates
   - CTA components
   - form / checkout / trial flow touchpoints
   - analytics / tracking setup if present
   - performance constraints
   - CMS or template constraints
   - whether the best path is:
     a) new dedicated paid landing page
     b) major improvement to existing page
     c) clone-and-optimize from existing page

2. Audit the existing site experience from a CRO standpoint:
   - headline clarity
   - message hierarchy
   - trust placement
   - proof placement
   - CTA frequency
   - friction
   - trial explanation
   - pricing clarity
   - visual consistency
   - information density
   - mobile usability
   - likely paid-traffic drop-off points

3. Identify the biggest message gaps between:
   - current landing experience
   - strongest static ad angles

4. Identify the highest-friction sections in the current funnel.

5. Then present findings in this exact format:

<audit_output>
Current stack / structure:
...
Current landing path recommendation:
...
Top CRO problems:
1.
2.
3.
4.
5.
Top message-match problems:
1.
2.
3.
Top trust / proof gaps:
1.
2.
3.
Top implementation risks:
1.
2.
3.
Recommended build approach:
...
</audit_output>

Do not code yet.
Wait until you have completed the audit and plan.

==================================================
SECOND: STRATEGY PHASE
==================================================

After the audit, create the landing page strategy.

You must define:

1. One-sentence value proposition
2. One primary page promise
3. One primary CTA
4. One supporting CTA
5. Message hierarchy from top to bottom
6. The exact emotional arc of the page:
   pain → mechanism → proof → offer → trust → CTA
7. Which of these angles will be primary vs secondary:
   - Bid time = too late
   - Get specified earlier
   - Avoid price wars
   - Improve margin control
   - Stop wasting rep hours
   - Weekly Monday pipeline control
   - Excel simplicity
   - Trusted for 10+ years
   - Key decision-maker contacts
   - 150–250 projects per week
8. The best page type:
   - single long-form paid LP
   - modular LP with anchor flow
   - highly visual comparison LP

Output this in:

<strategy_output>
Primary value proposition:
...
Primary promise:
...
Primary CTA:
...
Secondary CTA:
...
Message hierarchy:
1.
2.
3.
4.
5.
Primary angle:
...
Supporting angles:
...
Why this should convert:
...
</strategy_output>

==================================================
THIRD: PAGE ARCHITECTURE PHASE
==================================================

Then design the ideal landing page structure.

The page should likely include sections like:

1. HERO
2. WHY BID STAGE IS TOO LATE
3. THE SPEC WINDOW / TIMING MECHANISM
4. WHAT YOU GET EVERY MONDAY
5. SAMPLE LIST / ANONYMIZED PROOF
6. WHY THIS HELPS SALES TEAMS
7. TRUST / LOGOS / TESTIMONIAL
8. SIMPLE TRIAL EXPLANATION
9. REGION OR PLAN CHOICE IF NEEDED
10. FINAL CTA

But you can improve the architecture if you see a better way.

For every section, define:
- objective
- target objection it resolves
- exact headline
- exact supporting copy
- visual type
- CTA behavior
- mobile priority

Output in:

<wireframe_output>
Section 1:
Name:
Goal:
Objection handled:
Headline:
Subheadline:
Key bullets:
Visual:
CTA:
Notes:

Section 2:
...
</wireframe_output>

==================================================
FOURTH: COPY PHASE
==================================================

Write the full page copy.

COPY RULES:
- Tone: premium, clear, direct, strategic, B2B, confident
- No fluff
- No generic SaaS-speak
- No fake urgency
- No exaggerated claims
- No cringe marketing language
- No consumer tone
- No residential framing
- Strong use of this vocabulary:
  specs, bid stage, planning, pre-con, margin, price wars, rep time, key roles, project details, Monday delivery, outreach, specified, planning-stage visibility, pipeline control
- Copy must feel consistent with the best ad creatives already used

You must write:
- hero headline options x5
- hero subheadline options x5
- CTA label options x8
- full final chosen landing page copy
- button microcopy
- trust microcopy
- trial clarification microcopy
- form/checkout reassurance microcopy
- section headlines and body copy
- FAQ copy if needed

Important:
If the free trial requires a card to activate, clearly frame it with transparent, trust-building microcopy such as:
- No charge today
- Card required to activate trial
- Cancel before renewal if not a fit
But do not state anything you cannot support from current flow or business logic.

==================================================
FIFTH: DESIGN DIRECTION PHASE
==================================================

Design direction must match the current brand and strongest ads.

Brand style to preserve / elevate:
- dark espresso / dark brown / black base
- burnt orange / copper / rust accent
- high contrast
- bold condensed sans-serif feel
- premium B2B industrial visual language
- blueprint / planning / architectural / grid / spec-window feel
- clean layout, not cluttered
- strong visual hierarchy
- not cheesy
- not generic stock SaaS
- not overdesigned
- should feel like “commercial construction intelligence for sales teams”

Design requirements:
- desktop-first but mobile-excellent
- clear contrast
- obvious CTA buttons
- strong spacing rhythm
- trust blocks that feel real
- section transitions that keep momentum
- proof blocks that look operational
- cards / tables / comparison visuals that feel believable
- sample list visuals must feel like realistic working sales assets
- if there is a sample spreadsheet/table, anonymize or simulate responsibly

Do not create a page that looks like a template marketplace theme.
Create a page that looks like a serious conversion-focused B2B campaign destination.

==================================================
SIXTH: BUILD PHASE
==================================================

Only after strategy + wireframe + copy are complete:

Implement the page in the actual codebase.

Implementation rules:
- create clean, maintainable code
- reuse existing components where it helps
- create new components only when necessary
- ensure responsive behavior
- ensure accessible markup
- optimize typography and spacing
- make CTA sections reusable
- use semantic HTML
- keep CLS low
- avoid unnecessary JS
- lazy-load heavy visuals when appropriate
- preserve SEO basics
- preserve existing checkout / trial flow integrations unless there is a clear reason to improve
- if there is analytics tracking, make sure CTA clicks and page interactions can be measured

If needed, create:
- dedicated landing route
- reusable section components
- comparison cards
- proof strip
- testimonial block
- sample list block
- sticky CTA behavior on mobile if appropriate
- FAQ accordion only if it helps reduce friction

==================================================
SEVENTH: CRO / ANALYTICS REQUIREMENTS
==================================================

Where possible, implement or prepare for:
- primary CTA click tracking
- secondary CTA click tracking
- scroll depth
- section engagement
- start trial click
- region selection click
- form start
- checkout start
- trial activation completion event hooks where possible

Also recommend the ideal event naming scheme.

Output in:
<tracking_plan>
Primary events:
...
Secondary events:
...
Recommended naming:
...
</tracking_plan>

==================================================
EIGHTH: QA PHASE
==================================================

After implementation, run a full QA pass.

You must check:
- desktop responsiveness
- tablet responsiveness
- mobile responsiveness
- typography scaling
- CTA visibility above the fold
- layout breakpoints
- spacing consistency
- visual hierarchy
- trust placement
- performance issues
- dead links
- duplicate CTAs or confusing flows
- copy typos
- brand consistency
- whether the page actually matches the strongest ad message

Then provide:

<qa_report>
What was built:
...
What was improved:
...
Remaining concerns:
...
Recommended next optimizations:
1.
2.
3.
</qa_report>

==================================================
SUCCESS CRITERIA
==================================================

You are successful if the final page:
- clearly communicates that ProjectPro helps commercial suppliers see projects 3–6 months earlier during planning / pre-construction
- makes “bid stage = too late” immediately understandable
- shows that the product is operational and concrete, not vague
- makes the weekly delivery and included data feel useful to a real sales team
- uses proof and trust early enough to reduce skepticism
- makes the 30-day free trial feel low-risk and clear
- feels aligned with the strongest ad creatives
- looks premium and intentional
- is production-ready, not just a mockup

==================================================
CONTENT / MESSAGING PRIORITIES
==================================================

These are the most important truths to preserve in the landing experience:
1. Timing is the real value.
2. Planning stage is where specs are still influenceable.
3. Bid stage is often too late.
4. This helps reduce price-war positioning and protect margin.
5. This saves rep time by focusing outreach earlier.
6. Users receive a weekly Monday list.
7. The list includes project details and key contact roles.
8. The delivery is simple: Excel, no dashboard complexity.
9. The company has trust history and real customer proof.
10. The trial should feel clear and low-risk.

==================================================
IMPORTANT COPY CONSTRAINTS
==================================================

Do NOT say:
- guaranteed results
- guaranteed wins
- “you will win more projects” unless framed carefully
- “best in the market” without proof
- unsupported competitor claims
- fake scarcity
- fake urgency

Preferred phrasing:
- helps you get in earlier
- designed to help suppliers influence specs before bid
- can help reduce price-only competition
- gives your team earlier visibility
- built for commercial suppliers who need actionable project visibility
- planning-stage visibility before the bid rush

==================================================
DELIVERABLE ORDER
==================================================

Produce your work in this order:

1. Audit
2. Strategy
3. Wireframe
4. Copy system
5. Final copy
6. Design direction
7. Build plan
8. Implementation
9. Tracking plan
10. QA report

At every stage, be precise, commercially intelligent, and implementation-aware.

Do not be generic.
Do not be lazy.
Do not produce template-level work.

Produce the kind of landing page that a world-class B2B paid media team would actually deploy.

Start now by auditing the current codebase and current landing experience before making any code changes.

Before implementation, prioritize these three outcomes above everything else:

1. Strong message match with paid ads
2. Clear explanation of why planning-stage visibility matters more than generic lead quantity
3. A low-friction but trustworthy path into the 30-day free trial

If you ever have to choose between “pretty” and “clear,” choose clear.
If you ever have to choose between “clever” and “high-converting,” choose high-converting.
If you ever have to choose between preserving old structure and improving conversion flow, improve conversion flow.}}