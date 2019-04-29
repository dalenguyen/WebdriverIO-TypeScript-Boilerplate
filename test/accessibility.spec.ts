import { source } from 'axe-core';
import { expect } from 'chai';

// Advoid type checking for axe
declare const axe: any;

describe('Axe test', () => {
	it('Should return results', () => {
		browser.url('/');

		// inject the script
		browser.execute(source);
		// browser.debug();
		// https://github.com/dequelabs/axe-core/blob/develop/doc/API.md
		const options = { runOnly: { type: 'tag', values: ['wcag2a'] } };
		// run inside browser and get results
		const results = browser.executeAsync((options, done) => {
			axe.run(document, options, function(err, results) {
				if (err) throw err;
				done(results);
			});
		}, options);

		// console.log(results.passes);
		// console.log(results.violations);
		// // Details will be in nodes
		// console.log('Violation details:');
		// console.log(results.violations[0].nodes[0]);

		// This fails on purpose ;)
		expect(results.violations.length).to.be.equal(
			0,
			`${browser.getUrl()} doesn't pass Accessibility test`
		);
	});
});
