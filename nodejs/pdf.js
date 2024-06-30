'use strict';

const SavePdf = async (url, output_directory) =>
{
	if (output_directory === null)
		output_directory = '';
	else if (output_directory !== '')
		output_directory += '/';

	const browser = await require('puppeteer').launch(
	{
		headless: true,
		defaultViewport:
		{
			width: 1200,
			height: 800
		}
	});
	const page = await browser.newPage();
	await page.goto(url, {waitUntil: 'networkidle0'});
	await new Promise(resolve => setTimeout(resolve, 2000));
	const title = await page.title();
	await page.emulateMediaType('screen');
	await page.pdf(
	{
		displayHeaderFooter: false,
		printBackground: true,

		path: output_directory + title + '.pdf',

		width: (1 * 1350) + 'px',
		height: (1 * 1350 * Math.SQRT2) + 'px',
		scale: 1
	});
	await browser.close();
};

const argv = require('process').argv.slice(2);
if (argv.length > 0)
	SavePdf(argv[0], argv[1]);
else
{
	const readline = require('readline').createInterface(
	{
		input: process.stdin,
		output: process.stdout
	});
	readline.question('url:', async url =>
	{
		readline.question('output_directory:', async output_directory =>
		{
			await SavePdf(url, output_directory);
			readline.close();
		});
	});
}