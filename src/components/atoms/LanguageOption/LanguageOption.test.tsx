import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageOption from './LanguageOption';

const myFunc = jest.fn();

it('Check if code is rendered', () => {
    const { getByText } = render(<LanguageOption label='English' code='en' onClick={myFunc} />);
    const code = getByText(/en/i);
    expect(code).toBeInTheDocument();
});

it('Check if label is rendered', () => {
    const { getByText } = render(<LanguageOption label='English' code='en' onClick={myFunc} />);
    const label = getByText(/English/i);
    expect(label).toBeInTheDocument();
});

it('Check if onClick is working', () => {
    const { getByTestId } = render(<LanguageOption label='English' code='en' onClick={myFunc} />);
    const el = getByTestId('language-option');
    fireEvent.click(el);
    expect(myFunc).toBeCalledTimes(1);
});
