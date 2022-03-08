import React, { RefObject } from 'react';
import { fireEvent, render } from '@testing-library/react';
import UniversalDropdown from '.';
import clickOutside from '../../hooks/clickOutside';

const myFunc = jest.fn();

it('Checks if onClickOutside is called on click outside element', () => {
    const { getByTestId } = render(
        <UniversalDropdown style={{ backgroundColor: 'green' }} onClickOutside={myFunc}>
            <div>Test</div>
        </UniversalDropdown>,
    );
    const el = getByTestId('universal-dropdown');
    clickOutside({ current: el } as RefObject<HTMLElement>, () => myFunc());
    fireEvent.mouseDown(document.body);
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

it('Test if styles are working', () => {
    const { getByTestId } = render(
        <UniversalDropdown style={{ color: 'green' }} onClickOutside={myFunc}>
            <div>Test</div>
        </UniversalDropdown>,
    );
    const el = getByTestId('universal-dropdown');
    expect(el).toHaveStyle(`color: green`);
});
