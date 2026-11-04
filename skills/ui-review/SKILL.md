---
name: ui-review
description: Review an existing UI and make scoped improvements when requested. Reproduce layout and spacing issues in the running product, group findings by function, and make before/after HTML review slides when a visual walkthrough would help.
---

# UI Review

## Establish the baseline

- Start from the user's route, flow, screenshots, or existing review. Record the source revision or serving environment when known. Define coverage around affected roles, meaningful states, and supported screen sizes. Check both desktop and narrow views for responsive web UI.
- Exercise relevant transitions in the real UI. Inspect shared components and callers where source is available. Record the viewport, state, and steps to reproduce each finding. Distinguish real reproduction, fixture evidence, source evidence, and blocked checks.
- Use [the review workflow](references/review-workflow.md) for multi-state audits, implementation, or an existing review that needs to be brought up to date. Use whichever browser, device, source, and capture tools are available to the agent.

## Review layout and spacing together

Read the two bundled companion skills. Apply their design guidance within the product's conventions and the scope the user requested.

- [better-layout](references/companions/better-layout/SKILL.md) guides grouping, alignment, reading order, disclosure, and what happens when content grows or the viewport shrinks. Keep product-critical actions visible when users need them, even if several actions share a toolbar.
- [spacing-system-designer](references/companions/spacing-system-designer/SKILL.md) guides scale and token decisions. Compare the computed gap, padding, and alignment of equivalent controls and containers. Prefer the product's spacing and density rules. Consider a new token when the user asks for a spacing system or an established token cannot express a recurring need.

## Decide and deliver

- Group findings by user task and shared fix. A group can contain several routes and distinct states. Keep separate cases when the role, available action, or expected behavior changes. Prioritize blocked actions, hidden content, and misleading hierarchy over cosmetic differences.
- Recommend the smallest change that solves the demonstrated problem within the existing visual language. Preserve the workflow, permissions, and data behavior. Apply the fix to the shared component when its callers need the same behavior; use a local change when the issue is specific to one caller.
- Match the deliverable to the request. For review, provide evidence and proposed changes. For implementation, capture the before state, apply the requested fix, and verify the affected flow in the running product. When making or updating a comparison deck, follow [the HTML slides guide](references/html-slides.md).
- Verify the changed state at its reproducing size and a representative unaffected size. Exercise the affected interaction as well as checking appearance. Report outstanding coverage and keep proposal, implementation, and runtime acceptance claims distinct.
