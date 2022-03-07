import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';

it('Check if dropdown toggle works', async () => {
    const { getByTestId, queryByTestId } = render(<LanguageSwitcher />);
    const toggle = getByTestId('language-switcher-toggle');
    let dropdown = queryByTestId('language-dropdown');

    expect(dropdown).not.toBeInTheDocument();

    fireEvent.click(toggle);
    dropdown = queryByTestId('language-dropdown');
    expect(dropdown).toBeInTheDocument();

   //need to test click outside 
});

it('Check if toggle language code changes on update', () => {
    const {getByText} = render(<LanguageSwitcher/>);
    let code = getByText('en');
    expect(code).toBeInTheDocument();
})

