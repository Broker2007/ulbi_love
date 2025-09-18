import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('button', () => {
    test('with only first param', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('with only first param', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
