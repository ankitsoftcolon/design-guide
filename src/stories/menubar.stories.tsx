import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationDemos } from "@/components/showcase/navigation";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Navigation/Menubar",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Navigation/Menubar" }) },
      description: {
        component:
          "Interactive menubar composition using the Bluebox light theme. Source components live in src/components/ui/menubar.tsx.",
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
