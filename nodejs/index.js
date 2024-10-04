'use strict';

const path =
{
	resume: 'resume',
	resume_outsource: 'resume&outsource',
	cover_short: 'index-1-short',
	cover_long: 'index-1-long'
};

const operation =
{
	open: 'open',
	pdf: 'pdf'
};

const configs_base =
{
	operation: operation.pdf,
	operation_pdf_output_directory: 'C:/Users/User/Downloads',
	path: path.cover_short
};
const configs_extn =
{
	company: '_COMPANY_',
	position: '_POSITION_',

	// name: 'Caner Özdemir',
	/*
	sign: '',
	logo: '',
	mottos:
	[
		'',
		''
	]
	*/

	// path_long_matters: [],
};
const configs = configs_base.path === path.resume ? configs_base : { ...configs_base, ...configs_extn };

if (configs.path !== path.cover_long)
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
		await page.goto(url, {waitUntil: 'networkidle0'});
	};
	OpenChrome();
}
else if (configs.operation === operation.pdf)
{
	require('child_process').fork('pdf.js', [url, configs.operation_pdf_output_directory]);
}