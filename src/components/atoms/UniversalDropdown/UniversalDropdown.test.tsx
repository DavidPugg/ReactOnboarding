import React, { RefObject } from 'react';
import { fireEvent, render } from '@testing-library/react';
import UniversalDropdown from '.';

const outside = jest.fn((ref: RefObject<HTMLElement>, func: () => void) => {
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            func();
        }
    };
    document.addEventListener('click', handleClickOutside);
});

const myFunc = jest.fn();

it('Checks if onClickOutside is called on click outside element', () => {
    const { getByTestId } = render(
        <UniversalDropdown style={{}} onClickOutside={myFunc}>
            <div>Test</div>
        </UniversalDropdown>,
    );
    const el = getByTestId('universal-dropdown');
    outside({ current: el } as RefObject<HTMLElement>, () => myFunc());
    fireEvent.click(document.body);
    expect(myFunc).toBeCalledTimes(1);
});

it('Test children render', () => {
    const { getByTestId } = render(
        <UniversalDropdown style={{}} onClickOutside={myFunc}>
            <div data-testid='test'>Test</div>
        </UniversalDropdown>,
    );
    const testDiv = getByTestId('test');
    expect(testDiv).toBeInTheDocument();
});
