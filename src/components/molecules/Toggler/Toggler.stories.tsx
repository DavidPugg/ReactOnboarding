import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toggler from ".";

export default {
    title: 'Toggler',
    component: Toggler,
} as ComponentMeta<typeof Toggler>

const Template: ComponentStory<typeof Toggler> = (args) => <Toggler {...args}/>;

export const Toggle = Template.bind({});
Toggle.args = {
    options: [
        {
            label: 'On TV',
            type: 'tv'
        },
        {
            label: 'In Theaters',
            type: 'movie'
        },
        {
            label: 'Old Movies',
            type: 'old'
        }
    ],
    func: (type: String) => {}
}
