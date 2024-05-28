import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Home from './Home';

describe('toggle theme button', () => {
	let title;
	let subtitle;
	beforeEach(() => {
		render(<Home />);
		title = screen.getByTestId('homeTitle');
		subtitle = screen.getByTestId('homeSubtitle');
	});
	it('should render title and subtitle', () => {
		expect(title).toBeInTheDocument();
		expect(subtitle).toBeInTheDocument();
	});
});
