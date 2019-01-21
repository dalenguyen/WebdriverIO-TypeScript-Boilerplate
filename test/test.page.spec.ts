import testPage from './../pages/test.page';

describe('webdriver.io API Docs page', () => {
	before(() => {
		browser.url(testPage.getTestAlias());
	});

	it('should have the right title', () => {
		testPage.assertPageTitle();
	});

	it('assert edit button', () => {
		testPage.assertEditBtn();
	});
});
