'use strict';

const titles =
{
	'resume': 'Resume _ Caner Özdemir',
	'cover-short': 'Cover Letter',
	'cover-long': 'Cover Letter',

	'index-1-short': 'Cover Letter',
	'index-1-long': 'Cover Letter',

	'index-2': 'General and Skills',
	'index-3': 'Experiences and Projects'
};

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
else if (path === 'cover-short' || path === 'cover-long')
	CreateFrame(path.replace('cover', 'index-1'));
else
	CreateFrame(path);