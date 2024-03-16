'use strict';

const searchParams = new URL(window.location.href.replace(/\+/g, '%2B')).searchParams;
const path = searchParams.get('path');

if (path in titles)
	document.title = titles[path];

if (path === 'resume')
{
	CreateFrame('index-2').then(_ =>
	{
		document.body.insertAdjacentHTML('beforeend', `<div class='page-break'></div>`);
	}).then(_ =>
	{
		CreateFrame('index-3');
	});
}
else
	CreateFrame(path);