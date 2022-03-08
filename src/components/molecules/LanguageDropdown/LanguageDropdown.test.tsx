import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LanguageDropdown from './LanguageDropdown';
import { languages } from '../LanguageSwitcher/languages';

const myFunc = jest.fn();

describe('Check dropdowns', () => {
    const { getAllByTestId } = screen;

    beforeEach(() => {
        render(
            <LanguageDropdown
                languages={languages}
                currentLanguage={languages[0]}
                fallbackLanguage={languages[1]}
                onClickOutside={myFunc}
                onLanguageChange={myFunc}
            />,
        );
    });

    it('Both dropdowns should be closed', () => {
        let dropdowns = getAllByTestId('universal-dropdown');
        expect(dropdowns).toHaveLength(1);
    });

    it('First dropdown should open', () => {
        const buttons = getAllByTestId('main-language-option');
        fireEvent.click(buttons[0]);
        let dropdowns = getAllByTestId('universal-dropdown');
        expect(dropdowns).toHaveLength(2);
    });

    it('First dropdown should close', () => {
        const buttons = getAllByTestId('main-language-option');
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[0]);
        let dropdowns = getAllByTestId('universal-dropdown');
        expect(dropdowns).toHaveLength(1);
    });

    it('Both dropdowns should open', () => {
        const buttons = getAllByTestId('main-language-option');
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[1]);
        let dropdowns = getAllByTestId('universal-dropdown');
        expect(dropdowns).toHaveLength(3);
    });

    it('Both dropdowns should close', () => {
        const buttons = getAllByTestId('main-language-option');
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[1]);
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[1]);
        let dropdowns = getAllByTestId('universal-dropdown');
        expect(dropdowns).toHaveLength(1);
    });
});

describe('Check search filtering', () => {
    it('Should filter correctly', () => {
        const { getAllByTestId, getByTestId } = render(
            <LanguageDropdown
                languages={languages}
                currentLanguage={languages[0]}
                fallbackLanguage={languages[1]}
                onClickOutside={myFunc}
                onLanguageChange={myFunc}
            />,
        );
        const buttons = getAllByTestId('main-language-option');
        fireEvent.click(buttons[0]);
        let options = getAllByTestId('language-option');
        expect(options).toHaveLength(languages.length - 1);

        const input = getByTestId('language-search');
        fireEvent.input(input, { target: { value: 'de' } });
        options = getAllByTestId('language-option');
        expect(options).toHaveLength(1);
        expect(options[0]).toHaveTextContent(/de/i);
    });
});
