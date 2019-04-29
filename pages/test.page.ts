import { expect } from 'chai';
import { Test } from './../models';
import { Element } from '@wdio/sync';

class TestPage {
	private test: Test = null;
	private editBtn: string;

	constructor() {
		this.test = {
			alias: '/docs/api.html',
			title: 'API Docs · WebdriverIO',
		};
		this.editBtn = '.edit-page-link';
	}

	getTestAlias(): string {
		return this.test.alias;
	}

	private getEditBtnEl(): Element {
		return $(this.editBtn);
	}

	assertPageTitle(): void {
		expect(browser.getTitle()).to.equal(this.test.title);
	}

	assertEditBtn(): void {
		const editBtn = this.getEditBtnEl();
		expect(editBtn.getAttribute('href')).to.be.equal(
			'https://github.com/webdriverio/webdriverio/edit/master/docs/API.md'
		);
	}
}

const testPage = new TestPage();
Object.freeze(testPage);
export default testPage;
