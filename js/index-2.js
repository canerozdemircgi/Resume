'use strict';

if (searchParams.has('outsource'))
{
	document.title += ' - Outsource';

	document.getElementById('span_email').textContent = '...';
	document.getElementById('span_phone').textContent = '...';
	document.getElementById('span_portfolio').textContent = '...';
	document.getElementById('span_github').textContent = '...';
	document.getElementById('span_linkedin').textContent = '...';
}

const layer_person = document.getElementById('layer_person');
const layer_info = document.getElementById('layer_info');
const layer_education = document.getElementById('layer_education');
const layer_summary = document.getElementById('layer_summary');

layer_person.style.height = `${layer_education.getBoundingClientRect().height + layer_summary.getBoundingClientRect().height - layer_info.getBoundingClientRect().height}px`;