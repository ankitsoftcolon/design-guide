import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Forms } from "@/components/showcase/forms";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Forms/Combobox",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Forms/Combobox" }) },
      description: {
        component:
          "Interactive combobox composition using the Bluebox light theme. Source components live in src/components/ui/combobox.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Select & combobox">
      <Forms />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
