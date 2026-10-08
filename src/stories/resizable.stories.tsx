import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Advanced } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Advanced/Resizable",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Advanced/Resizable" }) },
      description: {
        component:
          "Interactive resizable composition using the Bluebox light theme. Source components live in src/components/ui/resizable.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Resizable panels">
      <Advanced />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
