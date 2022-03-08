import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
import clickOutside from '../../hooks/clickOutside';

const myFunc = jest.fn();

it('Check if dropdown toggle works', async () => {
    const { getByTestId, queryByTestId } = render(<LanguageSwitcher />);
    const toggle = getByTestId('language-switcher-toggle');
    let dropdown = queryByTestId('language-dropdown');

    expect(dropdown).not.toBeInTheDocument();

    fireEvent.click(toggle);
    dropdown = queryByTestId('language-dropdown');
    expect(dropdown).toBeInTheDocument();
});

it('Check if toggle language code changes on update', () => {
    const { getByText } = render(<LanguageSwitcher />);
    let code = getByText('en');
    expect(code).toBeInTheDocument();
});
