import { expect } from 'chai';

describe('webdriver.io page', () => {
	it('should have the right title', () => {
		browser.url('/');
		const title = browser.getTitle();
		expect(title).to.be.equal(
			'WebdriverIO · Next-gen WebDriver test framework for Node.js'
		);
	});
});
