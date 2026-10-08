import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cards } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Layout/Card",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Layout/Card" }) },
      description: {
        component:
          "Interactive card composition using the Bluebox light theme. Source components live in src/components/ui/card.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Content card">
      <Cards />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
