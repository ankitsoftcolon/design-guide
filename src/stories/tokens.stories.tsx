import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tokens } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Foundations/Design Tokens",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Foundations/Design Tokens" }) },
      description: {
        component:
          "Centralized blue palette, semantic surfaces, status colors, spacing and interaction states. Edit src/styles/theme.css to update the system. Inter is bundled locally; the system uses the light theme.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Palette: Story = {
  render: () => (
    <DemoFilter>
      <Tokens />
    </DemoFilter>
  ),
};
