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

fetch('version.txt').then(response => response.text()).then(response =>
{
    document.getElementById('span_version').textContent = response;
});
document.getElementById('span_date_time').textContent = `${year}-${month}-${day} ${hour}:${minute} UTC0`;

if (searchParams.has('company'))
{
	const company = searchParams.get('company');
	document.getElementById('span_company').textContent = company;
	document.title += ` - ${company}`;

	const company_logo = `resource/company/${company}.svg`;
	fetch(company_logo, {method: 'HEAD'}).then(response =>
	{
        const img_company = document.getElementById('img_company');
		if (response.ok)
            img_company.src = company_logo;
        else
            img_company.outerHTML = `<div id='img_company' class='img-signature'>${company.toUpperCase()}</div>`;
	}).catch(() => {});
}

if (searchParams.has('position'))
{
	const position = searchParams.get('position');
	document.getElementById('span_position').textContent = position;
	document.title += ` _ ${position}`;
}