# UI Review

An [Agent Skill](https://agentskills.io/specification) for auditing and improving an existing interface. It combines layout and spacing guidance with browser verification and before/after HTML slides.

The workflow starts with a real user task. It reproduces the problem at the size where it occurs, checks how the relevant UI is built, and groups equivalent problems under one fix. When a visual walkthrough helps, each case opens at its own viewport with a short explanation and a like-for-like comparison.

## Install

### Give your agent the link

Paste this into your agent's chat:

```text
Load the ui-review skill from https://github.com/ShenzheZhu/ui-review-skill.
Start with skills/ui-review/SKILL.md and load the bundled references it points to.
```

### Install with the CLI

Run this from your project and select your agent. The [skills CLI](https://github.com/vercel-labs/skills) supports Claude Code, Cursor, Codex, OpenCode, and other agents. It requires Node.js 22.20 or later.

```sh
npx skills add ShenzheZhu/ui-review-skill --skill ui-review
```

### Install manually

Copy the entire [`skills/ui-review`](skills/ui-review) folder into your agent's skills directory. You can also place it in a project and ask an agent with file access to follow `skills/ui-review/SKILL.md`. Keep the `references` folder alongside it so the workflow and bundled guidance are available offline.

## Try it

```text
Use the ui-review skill to review our account settings on desktop and mobile.
Check the default, validation error, and saving states. Group equivalent
issues and make an HTML deck with a before/after pair for each case.
```

Ask for an audit to get findings and proposals. Ask to apply the fixes when you want code changes and a follow-up check in the running product. The skill includes a [review workflow](skills/ui-review/references/review-workflow.md) and an [HTML slides guide](skills/ui-review/references/html-slides.md).

## Bundled guidance

- `better-layout` by Jakub Krehel. The bundled copy includes the skill and its two layout references. [Upstream revision](https://github.com/jakubkrehel/skills/tree/60bf140e43c98b248e6594487384ec967e89d98a/skills/better-layout) · [MIT notice](skills/ui-review/references/companions/better-layout/LICENSE)
- `spacing-system-designer` by lexicalninja. [Upstream revision](https://github.com/lexicalninja/my-little-scrum-team/tree/6b137af15eb0aba1cb62710987c93c1d27b253cc/skills/spacing-system-designer) · [MIT notice](skills/ui-review/references/companions/spacing-system-designer/LICENSE)
