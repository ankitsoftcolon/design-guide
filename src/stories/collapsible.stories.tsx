import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Advanced } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Advanced/Collapsible",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Advanced/Collapsible" }) },
      description: {
        component:
          "Interactive collapsible composition using the Bluebox light theme. Source components live in src/components/ui/collapsible.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Collapsible">
      <Advanced />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
