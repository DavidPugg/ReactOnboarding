import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LanguageDropdown from './LanguageDropdown';
import { languages } from '../LanguageSwitcher/languages';

const myFunc = jest.fn();

describe('Check dropdowns', () => {
    const { getByTestId, queryByTestId } = screen;

    beforeEach(() => {
        render(
            <LanguageDropdown
            type='current'
            title='test'
            languages={languages}
            currentLanguage={languages[0]}
            onLanguageChange={myFunc}
            />,
        );
    });

    it('Dropdown should be closed', () => {
        let dropdown = queryByTestId('universal-dropdown');
        expect(dropdown).not.toBeInTheDocument()
    });

    it('Dropdown should open', () => {
        const button = getByTestId('main-language-option');
        fireEvent.click(button);
        let dropdown = queryByTestId('universal-dropdown');
        expect(dropdown).toBeInTheDocument()
    });

    it('Dropdown should close', () => {
        const button = getByTestId('main-language-option');
        fireEvent.click(button);
        fireEvent.click(button);
        let dropdown = queryByTestId('universal-dropdown');
        expect(dropdown).not.toBeInTheDocument()
    });
});

describe('Check search filtering', () => {
    it('Should filter correctly', () => {
        const { getByTestId, getAllByTestId } = render(
            <LanguageDropdown
                type='current'
                title='test'
                languages={languages}
                currentLanguage={languages[0]}
                onLanguageChange={myFunc}
            />,
        );
        const button = getByTestId('main-language-option');
        fireEvent.click(button);
        let options = getAllByTestId('language-option');
        expect(options).toHaveLength(languages.length - 1);

        const input = getByTestId('language-search');
        fireEvent.input(input, { target: { value: 'de' } });
        options = getAllByTestId('language-option');
        expect(options).toHaveLength(1);
        expect(options[0]).toHaveTextContent(/de/i);
    });
});
