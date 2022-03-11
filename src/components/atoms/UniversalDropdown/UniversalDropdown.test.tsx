import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import UniversalDropdown from '.';

const myFunc = jest.fn();

describe('', () => {
    beforeEach(() => {
        render(
            <UniversalDropdown style={{ color: 'green' }} onClickOutside={myFunc}>
                <div data-testid='test'>Test</div>
            </UniversalDropdown>,
        );
    });
    const { getByTestId } = screen;

    it('Checks if onClickOutside is called on click outside element', () => {
        fireEvent.mouseDown(document.body);
        expect(myFunc).toBeCalledTimes(1);
    });

    it('Test children render', () => {
        const testDiv = getByTestId('test');
        expect(testDiv).toBeInTheDocument();
    });

    it('Test if styles are working', () => {
        const el = getByTestId('universal-dropdown');
        expect(el).toHaveStyle(`color: green`);
    });
});
