import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import LanguageDropdown from './LanguageDropdown';
import { languages } from '../LanguageSwitcher/languages';

const myFunc = jest.fn();

describe('Check dropdowns', () => {
    const {getAllByTestId} = screen;

    beforeEach(() => {
        render(    <LanguageDropdown
            languages={languages}
            currentLanguage={languages[0]}
            fallbackLanguage={languages[1]}
            onClickOutside={myFunc}
            onLanguageChange={myFunc}
        />)
    })

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
