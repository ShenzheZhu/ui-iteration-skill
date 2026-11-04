# Before and after review slides

Use the existing review format when updating a deck. For a new HTML deck, start with the case list and build the interface around it. Use one stable key per case so the same link still opens the intended comparison after reordering.

## Build a portable deck

Use [the bundled builder](../scripts/build-deck.mjs) for new HTML decks. It runs on Node.js without dependencies and embeds the evidence in [the deck template](../assets/review-deck.html). Open the generated HTML directly in a browser.

```sh
node <skill-folder>/scripts/build-deck.mjs review.json review.html
```

```json
{
  "title": "Settings review",
  "cases": [
    {
      "id": "settings/save-error",
      "group": "Settings",
      "title": "Save error on a short screen",
      "caption": "Keep Save in view while validation messages scroll.",
      "viewport": [320, 360],
      "before": "captures/error-before.html",
      "after": "captures/error-after.html",
      "afterLabel": "Verified fix"
    }
  ]
}
```

- Evidence paths are relative to the manifest. Use lossless `.png` for static captures and self-contained `.html` for interactive scenes. Inline each scene's assets so the deck works away from the original server. Use fixtures for state-changing interactions in a shareable deck.
- Set `viewport` to the actual width and height in CSS pixels. It defaults to `[1100, 740]`. Keep case IDs stable when editing evidence or reordering cases. The builder defaults the after label to `Proposal`. Use `Verified fix` only after checking the product.
- A context slide can omit `after`. Keep it only if it explains a neighboring comparison. The builder rejects exact duplicates. Still inspect every pair for a visible, meaningful difference.
- For reviewer feedback, update the affected evidence and caption, rebuild from the same manifest, and reopen the original deep link. Exercise the interaction again when the decision changes behavior.

## Make each case reviewable

1. **Scope the slide.** Show one state per slide. Group slides by user function and give each distinct subcase a direct link, such as `#settings/save-error`. Add previous and next controls and a case picker when the deck has enough cases to need them.
2. **Set the view.** Open each case at the exact viewport or component size that reveals the issue. Use a group preset or desktop fallback when the case has no special size. Manual size changes are useful for exploration. Reset to the target case's preset when navigating. Size a live frame to the target CSS viewport before scaling its display. Resizing the outer frame alone can activate different breakpoints.
3. **Match the evidence.** Use the same role, data, state, viewport, zoom, scroll position, and crop on both sides, except for the property under review. For a transition, match the trigger and the point in the sequence. Show enough surrounding context to locate the change. Capture static states losslessly and use an interactive preview when behavior cannot be judged from a still.
4. **Label both sides.** Distinguish the current UI, a proposal, and a verified implementation. Present the pair at the same scale, side by side where space allows, with a way to inspect each at full size. Reuse real product components or screenshots where possible and disclose fixture data.
5. **Point to the difference.** Use a plain title and one sentence that names the visible change and its purpose, such as “Keep Save in view while validation messages scroll.” Align the crop or add a quiet marker if needed. If no difference is visible, improve the evidence or drop the pair. Keep a single view only when it helps explain a neighboring case.

## Record evidence outside the slide

Keep a case list with the key, functional group, state, viewport, before/after evidence, source location when available, and verification status. A minimal entry might look like this:

| Key | State | Viewport | Evidence |
| --- | --- | --- | --- |
| `settings/save-error` | Validation errors in a long form | 320 × 360 | Current build and local fix, both reproduced in browser |

## Check what the reviewer opens

- Open the delivered HTML in a browser. Check that each retained direct link loads the intended case and size. Verify that both sides have the correct state, that assets load, and that key content and controls remain visible or reachable at the review zoom.
- Read each caption against the visible pair. A sentence promising that a status moves beside an action should show those elements beside each other. Test a size switch followed by navigation. Inspect any comparison that looks identical or has unusual scaling.
- When refreshing a deck, keep surviving links stable and reopen affected cases and neighbors. Update the case count after pruning. Deliver a shareable file or folder and, when useful, a preview URL. For external sharing, use sanitized sample data and verify that the recipient can open the deck and its assets independently of your development server.
