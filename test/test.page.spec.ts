import testPage from "./../pages/test.page";

describe("webdriver.io API Docs page", () => {
  it("should have the right title", () => {
    browser.url(testPage.getTestAlias());
    testPage.assertPageTitle();
  });
});
