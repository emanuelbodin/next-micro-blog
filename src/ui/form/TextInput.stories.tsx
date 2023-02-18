import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "./TextInput";

export default {
  title: "UI/form/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
  id: "textarea1",
  label: "label",
  onChange: (value: string) => {},
  value: "Hello world",
};
