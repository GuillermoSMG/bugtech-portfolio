import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ServiceArticle } from './ServiceArticle';

describe('toggle theme button', () => {
	const isContact = false;
	render(
		<ServiceArticle
			title='Email'
			desc='guille@gmail.com'
			icon='EmailIcon'
			isContact={isContact}
		/>
	);
	const article = !isContact ? screen.getByTestId('serviceArticle') : undefined;
	const anchor = isContact ? screen.getByTestId('serviceAnchor') : undefined;
	it('should render correct article', () => {
		if (!isContact) {
			expect(article).toBeInTheDocument();
			expect(anchor).not.toBeDefined();
		} else {
			expect(article).not.toBeDefined();
			expect(anchor).toBeInTheDocument();
		}
	});
});
