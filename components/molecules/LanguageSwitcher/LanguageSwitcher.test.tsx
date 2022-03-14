import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
import { languages } from './languages';

describe('Check if dropdown toggle works', () => {
    const setup = () => {
        const { getByTestId, queryByTestId } = render(<LanguageSwitcher languages={languages} />);
        const toggle = getByTestId('language-switcher-toggle');
        let dropdown = queryByTestId('universal-dropdown');
        return { dropdown, toggle, getByTestId, queryByTestId };
    };

    it('Dropdown should be closed', () => {
        const {dropdown} = setup();
        expect(dropdown).not.toBeInTheDocument();
    });

    it('Dropdown should be open', () => {
        let {toggle, dropdown, queryByTestId} = setup();
        fireEvent.click(toggle);
        dropdown = queryByTestId('universal-dropdown');
        expect(dropdown).toBeInTheDocument();
    });


    it('Dropdown should stay open on button press ', () => {
        let {toggle, dropdown, queryByTestId} = setup();
        fireEvent.click(toggle);
        fireEvent.click(toggle);
        dropdown = queryByTestId('universal-dropdown');
        expect(dropdown).toBeInTheDocument();
    });

    it('Clickoutside should close the dropdown', () => {
        let {toggle,dropdown, queryByTestId} = setup();
        fireEvent.click(toggle);
        dropdown = queryByTestId('universal-dropdown');
        expect(dropdown).toBeInTheDocument();

        fireEvent.mouseDown(document.body);
        dropdown = queryByTestId('universal-dropdown');
        expect(dropdown).not.toBeInTheDocument();
    })
});

it('Tests onLanguageChange function', () => {
    const { queryAllByTestId, getByTestId } = render(<LanguageSwitcher languages={languages} />);
    const toggle = getByTestId('language-switcher-toggle');
    let code = getByTestId('language-switcher-toggle');
    expect(code).toHaveTextContent(languages[0].code);

    fireEvent.click(toggle);
    const mainToggle = queryAllByTestId('main-language-option');
    fireEvent.click(mainToggle[0]);
    const options = queryAllByTestId('language-option');
    fireEvent.click(options[0]);

    expect(code).toHaveTextContent(languages[1].code);
});
