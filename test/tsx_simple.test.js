import { setupTest } from './test-helpers.js';
import { closePage } from 'pentf/browser_utils';
import expect from 'expect';

export const description = 'should transform TypeScript tsx files';

/**
 * @param {import('pentf/runner').TaskConfig} config
 */
export async function run(config) {
	const { page } = await setupTest(config, 'tsx-simple');

	await page.waitForSelector('#result', { timeout: 2000 });
	const text = await page.$eval('#result', el => el.textContent);
	expect(text).toEqual('foobarbaz');

	await closePage(page);
}
