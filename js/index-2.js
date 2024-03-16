'use strict';

if (searchParams.has('outsource'))
{
	document.title += ' - Outsource';

	document.getElementById('span_email').textContent = '...';
	document.getElementById('span_phone').textContent = '...';
	document.getElementById('span_website').textContent = '...';
	document.getElementById('span_github').textContent = '...';
	document.getElementById('span_linkedin').textContent = '...';
    document.getElementById('span_cover').textContent = '...';
    document.getElementById('span_details').textContent = '...';
}

const layer_about = document.getElementById('layer_about');
const layer_education = document.getElementById('layer_education');
const layer_portfolio = document.getElementById('layer_portfolio');
const layer_summary = document.getElementById('layer_summary');

const layer_left_height = layer_about.getBoundingClientRect().height + layer_portfolio.getBoundingClientRect().height;
const layer_right_height = layer_education.getBoundingClientRect().height + layer_summary.getBoundingClientRect().height;

const layer_person = document.getElementById('layer_person');

layer_person.style.height = `${layer_right_height - layer_left_height - 40}px`;
layer_person.style.gridTemplateColumns = `${layer_person.style.height} 1fr ${layer_person.style.height}`;

const layer_about_recess = document.querySelector('#layer_about > text-clause > span');
const layer_portfolio_recess = document.querySelector('#layer_portfolio > text-clause > span');
const layer_about_recess_width = layer_about_recess.offsetWidth;
const layer_portfolio_recess_width = layer_portfolio_recess.offsetWidth;
if (layer_about_recess_width > layer_portfolio_recess_width)
    layer_portfolio_recess.style.width = `${layer_about_recess_width}px`;
else
    layer_about_recess.style.width = `${layer_portfolio_recess_width}px`;