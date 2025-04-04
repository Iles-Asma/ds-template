import type { Meta, StoryObj } from "@storybook/react";
import { Text, textTags } from "./text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => <Text {...args} />,
  args: {
    children: "Content",
  },
  argTypes: {
    children: {
      control: "text",
    },
    as: {
      options: textTags,
      control: { type: "select" },
    },
  },
};
