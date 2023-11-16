import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppBar } from './';

export default {
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const NoNavItems = Template.bind({});
NoNavItems.args = {};

export const WithNavItems = Template.bind({});
WithNavItems.args = {
  navItems: [{ name: 'Assets', path: '/' }],
};
