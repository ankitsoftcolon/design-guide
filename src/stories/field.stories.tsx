import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Forms } from "@/components/showcase/forms";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Forms/Field",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Forms/Field" }) },
      description: {
        component:
          "Interactive field composition using the Bluebox light theme. Source components live in src/components/ui/field.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Validated form">
      <Forms />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
