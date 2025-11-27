'use strict';

import './js/index-1-short.js';

if (searchParams.has('matters'))
{
	const matters = searchParams.get('matters').split('$');

	const span_job_requirements = document.getElementById('span_job_requirements');
	const span_my_qualifications = document.getElementById('span_my_qualifications');

	while (span_job_requirements.childNodes.length > 1)
		span_job_requirements.lastChild.remove();
	while (span_my_qualifications.childNodes.length > 1)
		span_my_qualifications.lastChild.remove();

	for (let i = 0; i < matters.length; i += 2)
	{
		span_job_requirements.insertAdjacentHTML('beforeend', `<text-entry-left br='15px' mark='_matter-black'>${matters[i]}</text-entry-left>`);
		span_my_qualifications.insertAdjacentHTML('beforeend', `<text-entry-right br='15px' mark='_matter-black'>${matters[i + 1]}</text-entry-right>`);
	}
}