# UI Iteration

An [Agent Skill](https://agentskills.io/specification) for the full cycle of reviewing an existing interface, applying changes, and verifying them in the browser. It combines layout and spacing guidance with before/after HTML slides.

The workflow starts with a real user task. It reproduces the problem at the size where it occurs, checks how the relevant UI is built, and groups equivalent problems under one fix. Each slide compares the complete page at the case's own viewport, with one sentence pointing to the change. After edits, separate browser passes replay the original issue and check nearby states until no new actionable findings remain in the tested scope.

## Install

### Give your agent the link

Paste this into your agent's chat:

```text
Load the ui-iteration skill from https://github.com/ShenzheZhu/ui-iteration-skill.
Start with skills/ui-iteration/SKILL.md and load the bundled references it points to.
```

### Install with the CLI

Run this from your project and select your agent. The [skills CLI](https://github.com/vercel-labs/skills) supports Claude Code, Cursor, Codex, OpenCode, and other agents. It requires Node.js 22.20 or later.

```sh
npx skills add ShenzheZhu/ui-iteration-skill --skill ui-iteration
```

### Install manually

Copy the entire [`skills/ui-iteration`](skills/ui-iteration) folder into your agent's skills directory. You can also place it in a project and ask an agent with file access to follow `skills/ui-iteration/SKILL.md`. The folder contains the guidance, companion skills, and deck builder.

## Try it

```text
Use the ui-iteration skill to review our account settings on desktop and mobile.
Check the default, validation error, and saving states. Group equivalent
issues and make an HTML deck with a before/after pair for each case.
```

Ask for an audit to get findings and proposals. Ask to apply the fixes when you want code changes and a follow-up check in the running product. The bundled deck builder turns a case list and captured evidence into one shareable HTML file with grouped navigation, direct links, case-specific sizes, and full-size inspection. See the [review workflow](skills/ui-iteration/references/review-workflow.md) and [HTML slides guide](skills/ui-iteration/references/html-slides.md).

## Bundled guidance

- `better-layout` by Jakub Krehel. The bundled copy includes the skill and its two layout references. [Upstream revision](https://github.com/jakubkrehel/skills/tree/60bf140e43c98b248e6594487384ec967e89d98a/skills/better-layout) · [MIT notice](skills/ui-iteration/references/companions/better-layout/LICENSE)
- `spacing-system-designer` by lexicalninja. [Upstream revision](https://github.com/lexicalninja/my-little-scrum-team/tree/6b137af15eb0aba1cb62710987c93c1d27b253cc/skills/spacing-system-designer) · [MIT notice](skills/ui-iteration/references/companions/spacing-system-designer/LICENSE)
