import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Advanced } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Advanced/Scroll Area",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Advanced/Scroll Area" }) },
      description: {
        component:
          "Interactive scroll area composition using the Bluebox light theme. Source components live in src/components/ui/scroll-area.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Scroll area">
      <Advanced />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
