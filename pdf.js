const puppeteer = require('puppeteer');

const readline = require('readline').createInterface(
{
	input: process.stdin,
	output: process.stdout
});

readline.question('url:', async (url) =>
{
	const browser = await puppeteer.launch(
	{
		headless: true,
		defaultViewport:
		{
			width: 1200, height: 800
		}
	});
	const page = await browser.newPage();
	await page.goto(url, {waitUntil: 'networkidle0'});
	const title = await page.title();
	await page.emulateMediaType('screen');
	await page.pdf(
	{
		displayHeaderFooter: false,
		printBackground: true,

		path: title + '.pdf',

		width: (1 * 1350) + 'px',
		height: (1 * 1350 * Math.SQRT2) + 'px',
		scale: 1
	});
	await browser.close();

	readline.close();
});