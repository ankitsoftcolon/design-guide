import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Forms } from "@/components/showcase/forms";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Forms/Native Select",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Forms/Native Select" }) },
      description: {
        component:
          "Interactive native select composition using the Bluebox light theme. Source components live in src/components/ui/native-select.tsx.",
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
