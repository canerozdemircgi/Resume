'use strict';

if (searchParams.has('outsource'))
{
	document.title += ' - Outsource';

	document.getElementById('span_email').textContent = '.........';
	document.getElementById('span_phone').textContent = '.........';

	document.getElementById('span_website').textContent = '.........';
	document.getElementById('span_linkedin').textContent = '.........';
	document.getElementById('span_github').textContent = '.........';

	document.getElementById('span_details').innerText = '.........';
	document.getElementById('span_stats').innerText = '.........';
}

const layer_about_recess = document.querySelector('#layer_about > text-clause > span');
const layer_portfolio_recess = document.querySelector('#layer_portfolio > text-clause > span');
if (layer_about_recess !== null && layer_portfolio_recess !== null)
{
	const layer_about_recess_width = layer_about_recess.offsetWidth;
	const layer_portfolio_recess_width = layer_portfolio_recess.offsetWidth;
	if (layer_about_recess_width > layer_portfolio_recess_width)
		layer_portfolio_recess.style.width = `${layer_about_recess_width}px`;
	else
		layer_about_recess.style.width = `${layer_portfolio_recess_width}px`;
}

if (searchParams.has('outsource'))
	document.getElementById('reminder_version_content').innerHTML = `\
--------- --------- ---------
<div class='br00'></div>
--------- --------- ---------
<div class='br00'></div>
--------- --------- ---------`;
else
{
	fetch('version.txt').then(response => response.text()).then(response =>
	{
		document.getElementById('reminder_version_content_data').textContent = response;
	});
}

const layer_person = document.getElementById('layer_person');
const fixLayerPersonHeight = () =>
{
	const layer_left_height = document.querySelector('layer-product-left:first-of-type').getBoundingClientRect().top;
	const layer_right_height = document.querySelector('layer-product-right:first-of-type').getBoundingClientRect().top;

	layer_person.style.maxHeight = `${layer_right_height - layer_left_height}px`;
	layer_person.style.gridTemplateColumns = `minmax(0, ${layer_person.style.maxHeight}) minmax(40px, 1fr) minmax(0, ${layer_person.style.maxHeight})`;
};
queueMicrotask(fixLayerPersonHeight);
window.visualViewport.onresize = () =>
{
	layer_person.style.maxHeight = '0';
	layer_person.style.gridTemplateColumns = `0 1fr 0`;
	queueMicrotask(fixLayerPersonHeight);
};