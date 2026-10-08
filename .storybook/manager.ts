import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Bluebox · Design System",
    brandUrl: "/?path=/story/foundations-design-tokens--palette",
    brandTarget: "_self",
    fontBase: "Inter, sans-serif",
    colorPrimary: "#2463e8",
    colorSecondary: "#2463e8",
    appBg: "#f5f7fa",
    appContentBg: "#ffffff",
    appPreviewBg: "#f5f7fa",
    appBorderColor: "#e6eaf0",
    appBorderRadius: 6,
    textColor: "#263248",
    barBg: "#ffffff",
    barSelectedColor: "#2463e8",
    inputBorder: "#dfe5ed",
    inputBorderRadius: 6,
  }),
});
