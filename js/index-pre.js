'use strict';

const GetRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const titles =
{
	'resume': 'Resume _ Caner Özdemir',

	'index-1-long': 'Cover Letter _ Caner Özdemir',
	'index-1-short': 'Cover Letter _ Caner Özdemir',

	'index-2': 'General and Skills',
	'index-3': 'Experiences and Projects'
};

const CreateFrame = async path_frame =>
{
	await Promise.all
	([
		fetch(`css/${path_frame}.css`).then(response => response.ok ? response.text() : null),
		fetch(`${path_frame}.htm`).then(response => response.ok ? response.text() : null),
		fetch(`js/${path_frame}.js`).then(response => response.ok ? response.text() : null)
	]).then(([css_frame, htm_frame, js_frame]) =>
	{
		if (css_frame !== null)
			document.body.insertAdjacentHTML('beforeend', `<style>${css_frame}</style>`);

		if (htm_frame !== null)
			document.body.insertAdjacentHTML('beforeend', htm_frame);

		if (js_frame !== null)
		{
			const script = document.createElement('script');
			script.insertAdjacentHTML('beforeend', `{${js_frame}}`);
			document.body.appendChild(script);
		}
	}).catch(() => {});
};