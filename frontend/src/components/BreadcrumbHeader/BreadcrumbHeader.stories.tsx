import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadcrumbHeader } from '.';

export default {
  component: BreadcrumbHeader,
} as ComponentMeta<typeof BreadcrumbHeader>;

const Template: ComponentStory<typeof BreadcrumbHeader> = (args) => (
  <BreadcrumbHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
};
