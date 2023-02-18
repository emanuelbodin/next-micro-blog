import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavbarItem from "./NavbarItem";

export default {
  title: "UI/navbar/NavbarItem",
  component: NavbarItem,
} as ComponentMeta<typeof NavbarItem>;

const Template: ComponentStory<typeof NavbarItem> = (args) => (
  <NavbarItem {...args} />
);

export const Item = Template.bind({});
Item.args = {
  href: "https://localhost:6006",
  title: "Home",
};
