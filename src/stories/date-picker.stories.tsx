import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Forms } from "@/components/showcase/forms";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Forms/Date Picker",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Forms/Date Picker" }) },
      description: {
        component:
          "Interactive date picker composition using the Bluebox light theme. Source components live in src/components/ui/date-picker.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Calendar & date picker">
      <Forms />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
