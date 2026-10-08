# ADR-002: Use Storybook as the design-system explorer

## Status

Accepted

## Date

2026-10-08

## Context

The user requested Storybook in place of the dashboard, after removing the invoice page and dark mode. The design system still needs accessible reusable components, blue semantic tokens, and larger Inter typography.

## Decision

Replace the custom application shell and hash navigation with Storybook 10.6 using the official React/Vite framework. Provide an individual entry for each of the 58 components plus Design Tokens. Typed primitive stories expose component props through Controls. Complex component stories reuse interactive compositions through a title-filtering context, preserving their state and underlying accessibility behavior. Add automatic documentation, interaction reporting, viewport tools, and the accessibility addon. Both manager and previews use the light theme and locally bundled Inter.

Storybook owns navigation, search, and preview framing. `npm run dev` starts Storybook on the existing local port 5174; `npm run build` produces the static explorer in `dist/`. ADR-001's shell and hash-routing decisions are superseded by this decision; its shared component and theme decisions remain applicable.

## Alternatives considered

Keeping a separate dashboard would duplicate navigation and require maintaining two component explorers. A custom Storybook-style shell would miss the real Controls, docs, and addon integration requested by the user.

## Consequences

There is no separate application entry point or invoice route. Consumers can reuse components independently of Storybook. New components should include a typed story; complex compositions should keep application-specific state in the demo. Controls for `asChild` are disabled in the text-based Button story because Radix Slot requires one React element. Actual component accessibility still depends on consumer composition and should be reviewed through the Accessibility panel.
