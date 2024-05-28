import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Banner } from './Banner';

describe('toggle theme button', () => {
	let span, span2;
	beforeEach(() => {
		render(<Banner />);
		span = screen.getByText(
			'Simplicidad, mejores practicas y alto rendimiento'
		);
		span2 = screen.getByText('💡');
	});
	it('should render banner text', () => {
		screen.debug();

		expect(span).toBeInTheDocument();
		expect(span2).toBeInTheDocument();
	});
	it('should render banner with correct classes', () => {
		const className =
			'mx-auto px-4 sm:px-6 font-medium max-w-6xl py-4 text-center text-md dark:text-darkLinkText tracking-tighter';
		const className2 = 'block md:inline';
		expect(span).toHaveClass(className);
		expect(span).not.toHaveClass(className2);
		expect(span2).toHaveClass(className2);
		expect(span2).not.toHaveClass(className);
	});
});
