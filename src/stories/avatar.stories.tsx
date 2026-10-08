import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tables } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Data/Avatar",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Data/Avatar" }) },
      description: {
        component:
          "Interactive avatar composition using the Bluebox light theme. Source components live in src/components/ui/avatar.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Avatars">
      <Tables />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
