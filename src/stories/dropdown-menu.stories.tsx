import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationDemos } from "@/components/showcase/navigation";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Navigation/Dropdown Menu",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Navigation/Dropdown Menu" }) },
      description: {
        component:
          "Interactive dropdown menu composition using the Bluebox light theme. Source components live in src/components/ui/dropdown-menu.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Dropdown & context menus">
      <NavigationDemos />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
