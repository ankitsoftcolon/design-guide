import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cards } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Layout/Separator",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Layout/Separator" }) },
      description: {
        component:
          "Interactive separator composition using the Bluebox light theme. Source components live in src/components/ui/separator.tsx.",
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
