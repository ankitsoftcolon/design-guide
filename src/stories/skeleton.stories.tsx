import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Feedback } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Feedback/Skeleton",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Feedback/Skeleton" }) },
      description: {
        component:
          "Interactive skeleton composition using the Bluebox light theme. Source components live in src/components/ui/skeleton.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Skeleton & spinner">
      <Feedback />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
