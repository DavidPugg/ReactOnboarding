import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageDropdown from './LanguageDropdown';
import { languages } from '../LanguageSwitcher/languages';

const myFunc = jest.fn();

it('test', () => {
    const { getAllByTestId } = render(
        <LanguageDropdown
            languages={languages}
            currentLanguage={languages[0]}
            fallbackLanguage={languages[1]}
            onClickOutside={myFunc}
            onLanguageChange={myFunc}
        />,
    );
    const buttons = getAllByTestId('main-language-option');

    let dropdowns = getAllByTestId('universal-dropdown');
    expect(dropdowns).toHaveLength(1);

    fireEvent.click(buttons[0]);
    dropdowns = getAllByTestId('universal-dropdown');
    expect(dropdowns).toHaveLength(2);

    fireEvent.click(buttons[0]);
    dropdowns = getAllByTestId('universal-dropdown');
    expect(dropdowns).toHaveLength(1);

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    dropdowns = getAllByTestId('universal-dropdown');
    expect(dropdowns).toHaveLength(3);

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    dropdowns = getAllByTestId('universal-dropdown');
    expect(dropdowns).toHaveLength(1);
});
