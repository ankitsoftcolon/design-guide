# ADR-001: Shared semantic theme over registry primitives

## Status

Accepted

## Date

2026-10-08

## Context

The workspace was empty. The requested foundation needs a complete shadcn component set, a Domiex-inspired boxed application shell, responsive pages, and a consistent light theme. Recreating accessible primitives would add maintenance risk.

## Decision

Use Vite, React/TypeScript, Tailwind v4, and the official shadcn New York registry. Keep primitive APIs and interactions, apply one semantic CSS variable theme, and use restrained shared component selectors for the theme's type sizes, borders, surfaces, and spacing. Compose DatePicker and DataTable from registry components. Retain the registry's Base UI Combobox and specialist primitives for calendar, drawer, charts, carousel, and resizable panels.

The reference blue OKLCH palette is exact. Surface and spacing adaptations are centralized. Inter ships locally. The boxed width is a CSS token so future pages inherit the same shell. Hash navigation keeps the demonstration portable to static hosting. The theme is light-only at the user’s request. Dark overrides and theme switching were removed. The invoice example was subsequently removed at the user’s request. The application now opens directly on Design Tokens and contains the component showcase.

## Alternatives considered

- A page-specific recreation would not provide reusable components and would risk inconsistent states.
- A large additional UI framework would duplicate the requested component system.
- A custom primitive layer would duplicate Radix's keyboard/focus behavior.

## Consequences

Future pages compose the same components without restyling. Theme changes affect menus and overlays as well as the main page. Registry upgrades should be reviewed before overwriting customized files, particularly Button's explicit type/loading behavior and centralized utility imports. The showcase is lazy loaded; large vendor groups are split to keep the shell entry lighter.
