import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} label="Button" />
);

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
