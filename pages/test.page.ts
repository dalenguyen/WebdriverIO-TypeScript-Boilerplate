import { expect } from "chai";
import { Test } from "./../models";

class TestPage {
  test: Test = null;
  constructor() {
    this.test = {
      alias: "/docs/api.html",
      title: "API Docs · WebdriverIO"
    };
  }

  getTestAlias() {
    return this.test.alias;
  }

  assertPageTitle() {
    expect(browser.getTitle()).to.equal(this.test.title);
  }
}

const testPage = new TestPage();
Object.freeze(testPage);
export default testPage;
