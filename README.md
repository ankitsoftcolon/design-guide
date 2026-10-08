# Bluebox Design System

A React, TypeScript, Tailwind CSS v4 and shadcn/ui component library explored through Storybook 10.6. The dashboard and invoice page have been removed. The library uses a shared blue palette, larger locally bundled Inter typography, and a light theme.

## Run

Requires Node.js 24+.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5174/. `npm run storybook` starts the same explorer.

```sh
npm run typecheck
npm run lint
npm run build
```

The build produces a static Storybook in `dist/`, ready for static hosting.

## Explore

The sidebar contains 41 components and Design Tokens across Foundations, Actions, Forms, Layout, Data, Overlays, and Feedback. Each component has automatically generated documentation. Button, Input, Textarea, Checkbox, Switch, Slider, Progress, Badge, and Typography include editable Controls; other stories demonstrate interactive compositions.

Button includes primary, outline, small, loading, and disabled states plus a click interaction test. Input and Textarea include invalid and disabled examples. The Accessibility panel runs axe checks on rendered stories; inspect individual findings when composing components into an application.

Table demonstrations support filtering, amount sorting, row selection, pagination, and CSV export. Other stories include validated forms, calendars, dialogs, sheets, drawers, and toasts.

## Share code with a developer

Open a story’s **Code** panel or use **Copy code** below its documentation preview. The code view includes usage and the actual component implementation. [Developer handoff instructions](docs/developer-handoff.md) explain how to run or integrate the supplied source. Download `public/bluebox-developer-handoff.zip` for the complete source snapshot.

## Use the components

`src/styles/theme.css` owns colors, typography, surfaces, spacing, sizes, radii, and shadows. Body and table text use 14px Inter; helper text uses 13px. Import `src/styles/globals.css` into an application, and load the bundled Inter font weights as shown in `.storybook/preview.tsx`.

```tsx
import { Button } from '@/components/ui/button';

<Button loading={saving} onClick={save}>Save changes</Button>
```

Buttons default to `type="button"`; use `type="submit"` for form submission. Loading shows a spinner, disables the button, and sets `aria-busy`. `asChild` expects one React element.

Composed additions include DatePicker, DataTable, and Typography. Most primitives use Radix; Combobox uses Base UI, Drawer uses Vaul, Calendar uses React Day Picker.

## Structure

- `.storybook/`: explorer, light branding, providers, fonts, and addons.
- `src/stories/`: typed component stories and Controls.
- `src/components/ui/`: reusable themed primitives and compositions.
- `src/components/showcase/`: interactive demonstrations reused by composition stories.
- `src/styles/`: centralized tokens and shared component styling.
- `docs/`: reference analysis, decisions, coverage, and screenshots.

See [component coverage](docs/component-coverage.md) and [Storybook migration decision](docs/decisions/002-storybook-explorer.md).
