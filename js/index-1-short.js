'use strict';

const prefixDateTime = input =>
{
	if (input.toString().length == 1)
		return '0' + input;
	return input;
};

const date = new Date();

const year = prefixDateTime(date.getUTCFullYear());
const month = prefixDateTime(date.getUTCMonth() + 1);
const day = prefixDateTime(date.getUTCDate());
const hour = prefixDateTime(date.getUTCHours());
const minute = prefixDateTime(date.getUTCMinutes());

document.getElementById('span_date').textContent = `${year}-${month}-${day}`;
document.getElementById('span_time').textContent = `${hour}:${minute} UTC0`;

if (searchParams.has('name'))
{
	const name = searchParams.get('name');
	document.getElementById('span_name').textContent = name;
	document.title += ` _ ${name}`;

	const img_signature = document.getElementById('img_signature');
	if (searchParams.has('sign'))
	{
		const sign = searchParams.get('sign');
		img_signature.src = sign;
	}
	else
		img_signature.src = 'resource/other/Empty.svg';
}
else
{
	document.title += ' _ Caner Özdemir';

	fetch('htm/index-1-extra.htm').then(response => response.text()).then(response =>
	{
		const span_extra_left = document.getElementById('span_extra_left');
		const span_extra_right = document.getElementById('span_extra_right');

		const lines = response.split('\n');
		for (let i = 0; i < lines.length; i += 2)
		{
			span_extra_left.insertAdjacentHTML('beforeend', lines[i]);
			span_extra_right.insertAdjacentHTML('beforeend', lines[i + 1]);
		}
	});
}

const span_company = document.getElementById('span_company');
if (searchParams.has('company'))
{
	const company = searchParams.get('company');
	span_company.textContent = ` in ${company}.`;
	document.title += ` - ${company}`;

	let has_logo = false;
	if (searchParams.has('logo'))
	{
		has_logo = true;

		const logo = searchParams.get('logo');
		document.getElementById('img_company').src = logo;
	}
	else
	{
		const logo = `resource/company/${company}.svg`;
		fetch(logo, {method: 'HEAD'}).then(response =>
		{
			const img_company = document.getElementById('img_company');
			if (response.ok)
			{
				has_logo = true;

				img_company.src = logo;
			}
			else
				img_company.outerHTML = `<div id='div_company' class='img-signature'>${company.toUpperCase()}</div>`;
		}).catch(() => {
		});
	}

	setTimeout(() =>
	{
		if (has_logo && searchParams.has('logo_width'))
			img_company.style.maxWidth = `${searchParams.get('logo_width')}%`;
	}, 1000);
}
else
{
	span_company.textContent = ' in your company.';
}

if (searchParams.has('position'))
{
	const position = searchParams.get('position');
	document.getElementById('span_position').textContent = position;
	document.title += ` _ ${position}`;
}

if (searchParams.has('hr'))
{
	document.getElementById('span_hr').textContent = searchParams.get('hr');
}