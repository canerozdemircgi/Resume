'use strict';

if (searchParams.has('outsource'))
{
	document.title += ' - Outsource';

	document.getElementById('span_email').textContent = '.........';
	document.getElementById('span_phone').textContent = '.........';
	document.getElementById('span_website').textContent = '.........';
	document.getElementById('span_github').textContent = '.........';
	document.getElementById('span_linkedin').textContent = '.........';
	document.getElementById('span_cover').innerText = '.........\n.........';
	document.getElementById('span_details').innerText = '.........\n.........';
}

const layers_left = [...document.querySelectorAll('layer-title-left')];
const layers_right =  [...document.querySelectorAll('layer-title-right')];
const layer_left_height = layers_left.reduce((sum, element) => sum + element.getBoundingClientRect().height + 40, 0);
const layer_right_height = layers_right.reduce((sum, element) => sum + element.getBoundingClientRect().height + 40, 0);

const layer_person = document.getElementById('layer_person');
layer_person.style.height = `${layer_right_height - layer_left_height - 40}px`;
layer_person.style.gridTemplateColumns = `${layer_person.style.height} 1fr ${layer_person.style.height} 10px`;

const layer_about_recess = document.querySelector('#layer_about > text-clause > span');
const layer_portfolio_recess = document.querySelector('#layer_portfolio > text-clause > span');
const layer_about_recess_width = layer_about_recess.offsetWidth;
const layer_portfolio_recess_width = layer_portfolio_recess.offsetWidth;
if (layer_about_recess_width > layer_portfolio_recess_width)
	layer_portfolio_recess.style.width = `${layer_about_recess_width}px`;
else
	layer_about_recess.style.width = `${layer_portfolio_recess_width}px`;