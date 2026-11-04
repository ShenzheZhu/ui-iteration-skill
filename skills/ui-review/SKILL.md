---
name: ui-review
description: Review an existing UI and make scoped improvements when requested. Reproduce layout and spacing issues in the running product, group findings by function, and make before/after HTML review slides when a visual walkthrough would help.
---

# UI Review

## Establish the baseline

- Start from the user's route, flow, screenshots, or existing review. Record the source revision or serving environment when known. For an updated build, recheck affected cases and their neighbors, then retire proposals that already shipped.
- Define coverage around the task: affected roles, meaningful states, and supported screen sizes. Check a desktop and a narrow viewport for responsive web UI. Add short height, long content, zoom, or RTL when they can expose a different failure.
- Exercise relevant transitions in the real UI. Inspect shared components and callers where source is available. Record how to reproduce each finding, including viewport and state. Distinguish a real reproduction, a fixture, a source-only finding, and a blocked check.

## Review layout and spacing together

Use both companion skills for design decisions. Read the installed versions when available. Otherwise read the linked upstream guidance when accessible. The checks below also work offline.

- [better-layout](https://www.ui-skills.com/skills/jakubkrehel/better-layout) guides grouping, alignment, reading order, disclosure, and what happens when content grows or the viewport shrinks. Check that controls remain recognizable and reachable. Keep product-critical actions visible when users need them, even if several actions share a toolbar.
- [spacing-system-designer](https://github.com/lexicalninja/my-little-scrum-team/blob/main/skills/spacing-system-designer/SKILL.md) guides scale and token decisions. Compare the computed gap, padding, and alignment of equivalent controls and containers. Prefer the product's existing spacing and density rules. A value outside a sample scale is evidence only when it causes a visible inconsistency or usability problem. Propose new tokens only when the user asks for a spacing system or an established token cannot express a recurring need.

## Decide and deliver

- Group findings by user task and shared fix. A group can contain several routes and distinct states. Keep separate cases when the role, available action, or expected behavior changes. Prioritize blocked actions, hidden content, and misleading hierarchy over cosmetic differences.
- Recommend the smallest change that solves the demonstrated problem within the existing visual language. Preserve the workflow, permissions, and data behavior. Apply the fix to the shared component when its callers need the same behavior; use a local change when the issue is specific to one caller.
- Match the deliverable to the request. For review, provide evidence and proposed changes. For implementation, capture the before state, apply the authorized fix, and verify the affected flow in the running product. When making or updating a comparison deck, follow [the HTML slides guide](references/html-slides.md).
- Verify the changed state at its reproducing size and a representative unaffected size. For interaction changes, check the relevant click, keyboard, scroll, or state transition as well as appearance. For a multi-round review, recheck new fixes and previously uncovered high-risk states. Stop when a pass adds no actionable findings in the exercised scope. List any remaining blocked states and keep proposal, implementation, and runtime acceptance claims distinct.
