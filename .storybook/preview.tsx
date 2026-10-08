import { developerSource } from "./source-code";
import type { Preview } from "@storybook/react-vite";
import { create } from "storybook/theming";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { Toaster } from "../src/components/ui/sonner";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "../src/styles/globals.css";
const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    docs: { codePanel: true, description: { story: "Copy the example and component implementation from the code view. [Download the complete developer source package](bluebox-developer-handoff.zip)." }, canvas: { sourceState: "shown" }, source: { language: "tsx", excludeDecorators: true, dark: false, transform: developerSource }, theme: create({ base: "light", fontBase: "Inter, sans-serif", colorPrimary: "#2463e8", colorSecondary: "#2463e8" }) },
    options: {
      storySort: {
        order: [
          "Foundations",
          "Actions",
          "Forms",
          "Layout",
          "Data",
          "Overlays",
          "Feedback",
        ],
      },
    },
    backgrounds: { disable: true },
    a11y: { test: "todo" },
  },
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={250}>
        <main className="story-canvas">
          <Story />
        </main>
        <Toaster position="bottom-right" closeButton />
      </TooltipProvider>
    ),
  ],
};
export default preview;
