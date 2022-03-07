import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LanguageSearch from '.';

const myFunc = jest.fn();
it('Test if input calls callback function', () => {
    const { getByTestId } = render(<LanguageSearch onInput={myFunc} />);
    const input = getByTestId('language-search');
    expect(myFunc).toBeCalledTimes(0);
    fireEvent.input(input);
    expect(myFunc).toBeCalledTimes(1);
});
