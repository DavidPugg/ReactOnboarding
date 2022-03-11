import clickOutside from './clickOutside';
import { fireEvent } from '@testing-library/react';

describe('Test clickOutside', () => {
    const setup = () => {
        const myFunc = jest.fn();
        const el = document.createElement('div');
        return { myFunc, el };
    };

    it('On same element click', () => {
        const { el, myFunc } = setup();
        clickOutside([{ current: el }], myFunc);
        fireEvent.mouseDown(el);
        expect(myFunc).toBeCalledTimes(0);
    });

    it('On body click', () => {
        const { el, myFunc } = setup();
        clickOutside([{ current: el }], myFunc);
        fireEvent.mouseDown(document.body);
        expect(myFunc).toBeCalledTimes(1);
    });
});
