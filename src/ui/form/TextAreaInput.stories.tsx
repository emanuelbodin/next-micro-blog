import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextAreaInput from "./TextAreaInput";

export default {
  title: "UI/form/TextAreaInput",
  component: TextAreaInput,
} as ComponentMeta<typeof TextAreaInput>;

const Template: ComponentStory<typeof TextAreaInput> = (args) => (
  <TextAreaInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
  id: "textarea1",
  label: "label",
  onChange: (value: string) => {},
  value: "Hello world",
};
