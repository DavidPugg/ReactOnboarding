import React from 'react';
import { render } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';

test('Render language switcher component', () => {
    const {getByTestId} = render(<LanguageSwitcher />);
    expect(getByTestId('dropdown')).toHaveTextContent('en')
});
