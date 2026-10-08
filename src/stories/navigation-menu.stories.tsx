import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationDemos } from "@/components/showcase/navigation";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Navigation/Navigation Menu",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Navigation/Navigation Menu" }) },
      description: {
        component:
          "Interactive navigation menu composition using the Bluebox light theme. Source components live in src/components/ui/navigation-menu.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Navigation menu & menubar">
      <NavigationDemos />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
