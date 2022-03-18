import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainButton from '.';

export default {
    title: 'MainButton',
    component: MainButton,
} as ComponentMeta<typeof MainButton>;

const Template: ComponentStory<typeof MainButton> = (args) => <MainButton {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
    label: 'Hello World',
    type: 'primary',
    updated: true,
    onClick: () => {},
};

Secondary.args = {
    label: 'Hello World',
    type: 'secondary',
    updated: true,
    onClick: () => {},
};


Danger.args = {
    label: 'Hello World',
    type: 'danger',
    updated: true,
    onClick: () => {},
};

