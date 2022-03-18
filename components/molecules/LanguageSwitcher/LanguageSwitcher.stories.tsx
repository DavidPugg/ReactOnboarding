import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LanguageSwitcher from "./LanguageSwitcher";

export default {
    title: 'LanguageSwitcher',
    component: LanguageSwitcher
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args}/>;

export const LanguageSwitcherComp = Template.bind({})
LanguageSwitcherComp.args = {
    languages: [
        {
            label: "English",
            code: "en",
          },
          {
            label: "German",
            code: "de",
          },
          {
            label: "French",
            code: 'fr'
          },
          {
            label: "Croatian",
            code: 'hr'
          }
        ]
}