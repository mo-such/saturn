import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorInfo } from '.';
import { ApolloError } from '@apollo/client';

export default {
  component: ErrorInfo,
} as ComponentMeta<typeof ErrorInfo>;

const Template: ComponentStory<typeof ErrorInfo> = (args) => (
  <ErrorInfo {...args} />
);

export const NoError = Template.bind({});
NoError.args = {};

export const HasError = Template.bind({});
HasError.args = {
  error: {
    name: 'Error',
    message: 'Something went wrong',
  } as ApolloError,
};
