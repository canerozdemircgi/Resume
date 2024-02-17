'use strict';

if (searchParams.has('company'))
{
	const company = searchParams.get('company');
	document.getElementById('span_company').textContent = company;
	document.title += ` - ${company}`;

	const company_logo = `resource/company/${company}.svg`;
	fetch(company_logo, {method: 'HEAD'}).then(response =>
	{
		if (response.ok)
			document.getElementById('img_company').src = company_logo;
	}).catch(() => {});
}

if (searchParams.has('position'))
{
	const position = searchParams.get('position');
	document.getElementById('span_position').textContent = position;
	document.title += ` _ ${position}`;
}