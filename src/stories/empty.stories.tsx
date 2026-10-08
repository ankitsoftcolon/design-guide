import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cards } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Layout/Empty",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Layout/Empty" }) },
      description: {
        component:
          "Interactive empty composition using the Bluebox light theme. Source components live in src/components/ui/empty.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Empty state">
      <Cards />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
