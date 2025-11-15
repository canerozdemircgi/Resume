'use strict';

const GetRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const GetRandomFloat = (min, max) => Math.random() * (max - min) + min;
const GetRandomRgba = (rMin, rMax, gMin, gMax, bMin, bMax, aMin, aMax) =>
{
	const r = GetRandomInt(rMin, rMax);
	const g = GetRandomInt(gMin, gMax);
	const b = GetRandomInt(bMin, bMax);
	const a = GetRandomFloat(aMin, aMax);
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};
const GetRandomSelect = inputs => inputs[Math.floor(Math.random() * inputs.length)];

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
			script.type = 'module';
			script.textContent = js_frame;
			document.body.appendChild(script);
		}
	}).catch(() => {});
};