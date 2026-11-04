# Before and after review slides

## Make each case reviewable

- Put one case on each slide. Give it a stable link, a plain title, and one sentence that says what changed and why. Group slides by user function and make each distinct subcase independently reachable. Provide previous/next navigation and a case picker when the deck is large enough to need one.
- Open each case at the exact viewport or component size that reveals the issue. Use desktop as the fallback when the issue has no special size. A manual size switch can help exploration; opening another case should load that case's preset.
- Show the same role, data, state, viewport, zoom, scroll position, and crop on both sides, except for the property being reviewed. For a state transition, show the same trigger or same step in both versions. Preserve enough nearby context to locate the change. Use lossless captures for static views; use interactive previews when the behavior cannot be judged from a still image.
- Label the current UI and the proposal or verified implementation accurately. Present both at the same scale, side by side where space allows, with a way to inspect each at full size. Reuse real product components or screenshots when possible. A fixture can explain a state; its label and evidence must make its origin clear.
- Give every pair a visible difference that supports the stated change. If the difference needs a crop, an annotation, or a short interaction, make that available where the reviewer first lands. Keep a single view only if it explains a relevant state that a neighboring comparison needs. Omit redundant views.

## Check what the reviewer opens

Keep a case list with a stable key, functional group, state, viewport, before/after evidence, source location when available, and verification status. Put that metadata beside the deck so it does not crowd the slide.

Open the delivered HTML in a browser. Check that each retained case opens from its link, uses the intended size, shows the intended before and after states, and keeps key controls in view. Verify asset loading and the visual distinction at the actual review zoom. When refreshing an existing deck, retain the stable links for surviving cases and reopen affected slides and related cases. Deliver a shareable file or folder, with a preview URL when useful. For external sharing, use sanitized sample data and verify that the recipient can open the deck and its assets without your development server.
