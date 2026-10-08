import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cards } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Layout/Item",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Layout/Item" }) },
      description: {
        component:
          "Interactive item composition using the Bluebox light theme. Source components live in src/components/ui/item.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Items & separators">
      <Cards />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
