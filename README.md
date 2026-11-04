# UI Review

A Codex skill for auditing and improving an existing interface. It combines [better-layout](https://www.ui-skills.com/skills/jakubkrehel/better-layout), [spacing-system-designer](https://github.com/lexicalninja/my-little-scrum-team/blob/main/skills/spacing-system-designer/SKILL.md), and a browser-verified before/after review deck.

The workflow starts with a real user task. It reproduces the problem at the size where it occurs, checks how the relevant UI is built, and groups equivalent problems under one fix. When a visual walkthrough helps, each case opens at its own viewport with a short explanation and a like-for-like comparison.

## Install in Codex

Ask Codex to install the skill:

```text
Use $skill-installer to install skills/ui-review from https://github.com/ShenzheZhu/ui-review-skill.
```

For manual installation, clone this repository and copy `skills/ui-review` into your Codex skills directory (`~/.codex/skills` by default). The skill uses local copies of the companion skills when available and includes review criteria for offline use.

## Try it

```text
Use $ui-review to review our account settings at desktop and mobile sizes.
Check the default, validation error, and saving states. Show the issues in
an HTML deck with matched before/after views and one sentence per case.
```

For implementation, ask Codex to apply the agreed fixes and verify the affected flows in the running product. The same workflow also supports a review-only report.
