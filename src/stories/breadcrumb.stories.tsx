import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationDemos } from "@/components/showcase/navigation";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Navigation/Breadcrumb",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Navigation/Breadcrumb" }) },
      description: {
        component:
          "Interactive breadcrumb composition using the Bluebox light theme. Source components live in src/components/ui/breadcrumb.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Breadcrumb & pagination">
      <NavigationDemos />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
