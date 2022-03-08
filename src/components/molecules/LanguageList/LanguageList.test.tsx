import React from 'react';
import { render } from '@testing-library/react';
import LanguageList from './LanguageList';

const languages = [
    {
        label: 'English',
        code: 'en',
    },
    {
        label: 'German',
        code: 'de',
    },
];

const myFunc = jest.fn();

it('Check if all LanguageOptions are rendered', () => {
    const { getAllByTestId } = render(
        <LanguageList languages={languages} onLanguageChange={() => myFunc()} type='fallback' />,
    );
    const options = getAllByTestId('language-option');
    expect(options.length).toBe(2);
    options.pop();
    expect(options.length).toBe(1);
});