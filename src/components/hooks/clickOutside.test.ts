import clickOutside from './clickOutside';
import { fireEvent } from '@testing-library/react';

describe('Test clickOutside', () => {
    it('On same element click', () => {
        const myFunc = jest.fn();
        const el = document.createElement('div');
        clickOutside({ current: el }, myFunc);
        fireEvent.mouseDown(el)
        expect(myFunc).toBeCalledTimes(0);
    });

    it('On body click', () => {
        const myFunc = jest.fn();
        const el = document.createElement('div');
        clickOutside({ current: el }, myFunc);
        fireEvent.mouseDown(document.body)
        expect(myFunc).toBeCalledTimes(1);
    });
});
