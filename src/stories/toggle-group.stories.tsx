import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Buttons } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Actions/Toggle Group",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Actions/Toggle Group" }) },
      description: {
        component:
          "Interactive toggle group composition using the Bluebox light theme. Source components live in src/components/ui/toggle-group.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Toggle & toggle group">
      <Buttons />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
