import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
import { languages } from './languages';

it('Check if dropdown toggle works', async () => {
    const { getByTestId, queryByTestId } = render(<LanguageSwitcher />);
    const toggle = getByTestId('language-switcher-toggle');
    let dropdown = queryByTestId('language-dropdown');

    expect(dropdown).not.toBeInTheDocument();

    fireEvent.click(toggle);
    dropdown = queryByTestId('language-dropdown');
    expect(dropdown).toBeInTheDocument();
});

it('Tests onLanguageChange function', () => {
    const { queryAllByTestId, getByTestId } = render(<LanguageSwitcher />);
    const toggle = getByTestId('language-switcher-toggle');
    let code = getByTestId('language-switcher-toggle');
    expect(code).toHaveTextContent(languages[0].code);

    fireEvent.click(toggle);
    const mainToggle = queryAllByTestId('main-language-current');
    fireEvent.click(mainToggle[0]);
    const options = queryAllByTestId('language-option');
    fireEvent.click(options[0]);

    expect(code).toHaveTextContent(languages[1].code);
});
