# Developer handoff

Open a component's story and choose the **Code** tab for copyable usage and component implementation. Documentation pages show the same code below each preview, with **Copy code**. Primitive usage follows the selected Controls. Composition examples are extracted from the working demos and include their imports, state, and referenced data. Design Tokens exposes the theme stylesheet.

The complete source snapshot is available at `public/bluebox-developer-handoff.zip`, also linked from Storybook documentation. It contains components, stories, shared styles, the dependency lockfile, Storybook/Vite configuration, and these instructions. Fonts are provided by the pinned `@fontsource/inter` dependency. This is a source snapshot; regenerate the archive with `npm run handoff` when preparing a later handoff (requires Python 3 for ZIP packaging).

## Run the supplied project

Use Node.js 24 or newer. From the unpacked project folder:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5174/. Validate with `npm run typecheck`, `npm run lint`, and `npm run build`.

## Integrate into another React project

Copy the needed files from `src/components/ui/` and their local dependencies, plus `src/lib/utils.ts`, `src/hooks/`, and `src/styles/`. Keep the Tailwind v4 Vite plugin and `@/*` alias from the supplied Vite and TypeScript configuration, or adapt imports to your existing paths. Install the component dependencies listed in `package.json`.

At your application's entry point, load the global stylesheet and Inter:

```tsx
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@/styles/globals.css';
```

Review `.storybook/preview.tsx` for TooltipProvider and Toaster setup. Gallery examples use `DemoCard`; copy the showcase helper too, or replace that wrapper with your application container. Components use the shared blue semantic tokens and light theme. The generated example file is refreshed automatically before dev, typecheck, and build; edit the showcase demos rather than the generated output.
