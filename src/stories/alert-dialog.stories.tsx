import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overlays } from "@/components/showcase/overlays";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Overlays/Alert Dialog",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Overlays/Alert Dialog" }) },
      description: {
        component:
          "Interactive alert dialog composition using the Bluebox light theme. Source components live in src/components/ui/alert-dialog.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Alert dialog">
      <Overlays />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
