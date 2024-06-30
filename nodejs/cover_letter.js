'use strict';

const path =
{
	short: 'index-1-short',
	long: 'index-1-long'
};

const operation =
{
	open: 'open',
	pdf: 'pdf'
};

const configs =
{
	operation: operation.pdf,
	operation_pdf_output_directory: 'C:/Users/User/Downloads',
	path: path.short,
	// path_long_matters: [],

	// name: 'Caner Özdemir',
	company: '_COMPANY_',
	position: '_POSITION_',

	/*
	sign: '',
	logo: '',
	mottos:
	[
		'',
		''
	]
	*/
};

if (configs.path === path.short)
	delete configs.path_long_matters;

const entries = Object.entries(configs).slice(1);

const url_base = 'https://canerozdemircgi.github.io/Resume/index.html?';
const url_params = []
for (let [key, value] of entries)
{
	if (Array.isArray(value))
	{
		if (value.every(element => element === ''))
			continue;
		value = value.join('$');
	}

	if (configs[key] !== '')
		url_params.push(`${key}=${value}`);
}
const url = url_base + url_params.join('&');

if (configs.operation === operation.open)
{
	const OpenChrome = async () =>
	{
		const browser = await require('puppeteer').launch(
		{
			headless: false,
			channel: 'chrome',
			defaultViewport: null,
			args:
			[
				'--start-maximized'
			],
			ignoreDefaultArgs:
			[
				'--enable-automation'
			]
		});
		const page = (await browser.pages())[0];
		await page.goto(url,
		{
			waitUntil: 'networkidle0'
		});
	};
	OpenChrome();
}
else if (configs.operation === operation.pdf)
{
	require('child_process').fork('pdf.js', [url, configs.operation_pdf_output_directory]);
}