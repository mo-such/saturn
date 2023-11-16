import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataTable } from '.';

export default {
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  columns: ['name', 'region', 'admin'],
  rows: [
    {
      name: 'Carter',
      region: 'US-2',
      admin: 'true',
    },
    {
      name: 'Karson',
      region: 'US-4',
      admin: 'false',
    },
  ],
};
