'use strict';

const pdf_scale = 1;
const width = pdf_scale * 1350;
const height = width * Math.SQRT2;

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
			width: Math.ceil(width),
			height: Math.ceil(height)
		}
	});
	const page = (await browser.pages())[0];

	await page.goto(url, {waitUntil: 'networkidle0'});
	await page.reload();

	await page.emulateMediaType('screen');

	await new Promise(resolve => setTimeout(resolve, 3000));
	const title = await page.title();

	await page.pdf(
	{
		displayHeaderFooter: false,
		printBackground: true,

		path: output_directory + title.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_') + '.pdf',

		preferCSSPageSize: false,

		width: width + 'px',
		height: height + 'px',
		scale: pdf_scale,

		margin:
		{
			top: '0',
			right: '0',
			bottom: '0',
			left: '0'
		}
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