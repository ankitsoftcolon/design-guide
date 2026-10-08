import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationDemos } from "@/components/showcase/navigation";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Navigation/Command",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Navigation/Command" }) },
      description: {
        component:
          "Interactive command composition using the Bluebox light theme. Source components live in src/components/ui/command.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Command palette">
      <NavigationDemos />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
