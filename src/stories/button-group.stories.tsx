import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Buttons } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Actions/Button Group",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Actions/Button Group" }) },
      description: {
        component:
          "Interactive button group composition using the Bluebox light theme. Source components live in src/components/ui/button-group.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Button group">
      <Buttons />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
