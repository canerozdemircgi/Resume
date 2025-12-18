'use strict';

const path =
{
	resume: 'resume',
	resume_outsource: 'resume&&outsource',
	cover_short: 'index-1-short',
	cover_long: 'index-1-long'
};

const operation =
{
	open: 'open',
	pdf: 'pdf'
};

const resource =
{
	local: 'local',
	remote: 'remote'
};

const configs_base =
{
	operation: operation.pdf,
	operation_pdf_output_directory: 'C:/Users/User/Downloads',

	resource: resource.local,
	path: path.resume
};
const configs_extn =
{
	company: '___COMPANY___',
	position: '___POSITION___',

	// name: 'Caner Özdemir',
	// logo_width: 100,
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
	// matrix_freq: 0.25
};

const configs = configs_base.path.includes(path.resume) ? configs_base : { ...configs_base, ...configs_extn };
if (configs.path !== path.cover_long)
	delete configs.path_long_matters;

const url_base_resource_local = 'http://localhost:63342';
const url_base_resource_remote = 'https://canerozdemircgi.github.io';
const url_base_resource = configs_base.resource === resource.local ? url_base_resource_local : url_base_resource_remote;

const url_base = url_base_resource + '/Resume/index.html?';
const url_params = []

const entries = Object.entries(configs).slice(3);
for (let [key, value] of entries)
{
	if (Array.isArray(value))
	{
		if (value.every(element => element === ''))
			continue;
		value = value.join('$');
	}

	if (configs[key] !== '')
		url_params.push(`${key}=${encodeURIComponent(value).replaceAll('%26%26', '&')}`);
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
	require('child_process').fork('pdf.js', [url, configs.operation_pdf_output_directory]);