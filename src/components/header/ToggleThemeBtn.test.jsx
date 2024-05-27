import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { ThemeContextConteiner } from '../ThemeContext';
import { ToggleThemeBtn } from './ToggleThemeBtn';

describe('toggle theme button', () => {
	beforeEach(() => {
		render(
			<ThemeContextConteiner>
				<ToggleThemeBtn />
			</ThemeContextConteiner>
		);
	});
	it('should render toggle button in light mode', () => {
		const button = screen.getByTestId('toggle-theme-button');
		// Initial state: Light Mode
		expect(button).toBeInTheDocument();
		expect(document.documentElement).not.toHaveClass('dark');
	});
	it('should change class and button', () => {
		const button = screen.getByTestId('toggle-theme-button');
		let darkIcon = screen.getByTestId('dark-icon');
		// Initial state: Light Mode
		expect(button).toBeInTheDocument();
		expect(document.documentElement).not.toHaveClass('dark');
		expect(darkIcon).toBeInTheDocument();

		fireEvent.click(button);
		const lightIcon = screen.getByTestId('light-icon');

		expect(document.documentElement).toHaveClass('dark');
		expect(lightIcon).toBeInTheDocument();

		fireEvent.click(button);
		expect(document.documentElement).toHaveClass('light');
		darkIcon = screen.getByTestId('dark-icon');
		expect(darkIcon).toBeInTheDocument();
	});
});
