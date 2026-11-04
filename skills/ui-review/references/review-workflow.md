# Review workflow

## Choose cases that can change the outcome

Start with the user task and map its entry point, completion state, and recoverable interruptions. Use an existing case list or source tests to find branches. Test each role or permission that changes what people can see or do. Loading, empty, validation error, pending, and success states deserve separate cases when their layout, actions, or behavior differs.

Pick dimensions from the product's supported range. Start with a normal desktop and phone viewport for responsive pages, then shrink around the breakpoint that exposes the issue. Use a short viewport for dialogs, sticky footers, or workspaces with independent scroll areas. Add long names, real translations, zoom, or RTL where the interface supports them and the result may change. For a panel or embedded view, record the container width as well as the browser viewport.

Record the revision, route, role, fixture data, and interaction that produced the observation. A screenshot shows what was visible. A browser replay can show what is reachable, scrollable, or interactive. A source check explains the conditions and shared components behind the behavior. Keep these evidence types distinct when access to the running product is limited.

## Inspect a finding before proposing a change

1. Identify the task impact. Describe what gets clipped, misread, obscured, or hard to activate. Include the exact viewport and state. For spacing, measure the rendered gap or padding and compare equivalent components with the same density.
2. Trace the rule that produced it. Check the component, its layout container, tokens, and relevant callers. A shared dialog footer may need a change across its callers. A single workflow's primary and secondary actions may need an adjustment at that caller.
3. Preserve the product's visual language and action hierarchy. Keep the actions users need at that point easy to find. Place secondary actions behind a menu only when that placement still fits the task. Check whether a change to visual order also affects keyboard navigation.
4. Group equivalent cases under the same fix. For example, two modal states with the same touching buttons can share one finding. A pending state that disables cancellation still needs its own case if the user needs to verify that behavior.

Rank findings by impact. A clipped confirm button or unreadable text outranks inconsistent padding. A different spacing value can be intentional when density or hierarchy changes.

## Apply and verify requested fixes

Save the baseline before editing. Use existing components and tokens to solve the identified problem. For shared changes, sample other callers with different text lengths, button counts, or states. For an interaction change, replay the trigger and the result. Check focus return after closing an overlay, scroll access to actions on a short viewport, and feedback when the operation is pending or fails, as applicable.

Use a controlled fixture or test environment for flows that create records, send messages, make purchases, or change other persistent state. Report what ran and distinguish fixture outcomes from outcomes on an external service.

## Recheck an existing review

Compare the prior baseline to the requested build. Reopen affected cases and nearby states with shared components. Retire proposals the new build already satisfies, update stale evidence, and preserve stable identifiers for retained cases. Keep proposals, implemented changes, and confirmed behavior separate.

For a multi-round audit, record each pass's scope and newly confirmed issues. After fixes, repeat the failing cases and relevant neighbors, then check high-impact gaps. A pass with no new actionable findings closes the exercised scope. Record any unreachable states or devices separately.
