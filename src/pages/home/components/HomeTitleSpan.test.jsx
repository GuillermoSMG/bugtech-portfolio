import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Home from '../Home';

describe('toggle theme button', () => {
	beforeEach(() => {
		render(<Home />);
	});
	it('should render span', () => {
		screen.debug();
		const span = screen.getByText('Creación de software altamente');
		const span2 = screen.getByText('personalizado');
		expect(span).toBeInTheDocument();
		expect(span2).toBeInTheDocument();
	});
});
