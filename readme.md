# WebdriverIO UI Automation Test with TypeScript

Create a powerful boilerplate for UI Automation test with WebdriverIO and TypeScript

## Features

+ Use Page Object Model for managing your test cases
+ [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) for testing
+ Interactive report with [Allure](https://webdriver.io/docs/allure-reporter.html)
+ Accessibity test with [Axe](https://github.com/dequelabs/axe-core)

## Why using TypeScript

With [TypeScript](https://en.wikipedia.org/wiki/TypeScript), it is possible to use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript-generated code from other JavaScript. Type declarations for these libraries are provided with the source code.

## Getting Started

```sh
npm install
```

## Running Tests

Run all tests. Mocha will look for test folder. If you need to use another folder, please specify it in package.json file.

```sh
npm run test
```

For development test, you can comment the --headless option in the wdio.conf.js for directly openning the chrome browser.

In order to run one suite test only, you can use:

```sh
npm run dev path-to-test-file
```

## Reports

The test report will show as a HTML webpage on a new window tab.

For running the test and show the report:

```sh
npm run report
```

For showing the report only:

```sh
npm run run-report
```

## Rerferences

[WebdriverIO API](http://webdriver.io/api/)
[Wdio-Axe-Example](https://github.com/klamping/wdio-axe-example)