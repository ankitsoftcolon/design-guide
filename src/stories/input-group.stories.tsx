import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Forms } from "@/components/showcase/forms";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Forms/Input Group",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Forms/Input Group" }) },
      description: {
        component:
          "Interactive input group composition using the Bluebox light theme. Source components live in src/components/ui/input-group.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Input groups & textarea">
      <Forms />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
