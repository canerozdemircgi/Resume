"use strict";

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const matrix_length = 87 * 74;
const matrix_cache = 0.15625 - 0.03125;

class LayerBackground extends HTMLElement
{
	static LayerBackgroundString(page)
	{
return `\
<div id='layer-background-matrix'></div>
<div class='layer-background-page'><div class='layer-background-page-container'>${page}</div></div>

<div class='layer-background-half left'>

	<div id='layer-background-half-left'></div>

	<div class='text-left'>Developed and designed by Caner Özdemir</div>
	<hr class='hr'>
	<div>using pure html, js, css, svg</div>

</div>

<img alt='!!!!!!!!!!' class='layer-background-middle' src='template/resource/main/background.svg'>

<div class='layer-background-half right'>

	<div id='layer-background-half-right'></div>

	<div class='text-right'>Next Generation Computed Imagination</div>
	<hr class='hr'>
	<div class='layer-background-hash text-right'></div>

</div>`;
	}

	static LayerBackgroundMatrixString()
	{
		if (0.5 > Math.random())
			return `<span>&nbsp;</span>`;

		const character = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		const a = Math.random() * matrix_cache + 0.03125;
		return `<span style='color: rgba(${r}, ${g}, ${b}, ${a});'>${character}</span>`;
	}

	get page() { return this.getAttribute('page'); }
	set page(value) { this.setAttribute('page', value); }

	constructor()
	{
		super();

		this.insertAdjacentHTML('beforeend', LayerBackground.LayerBackgroundString(this.page));

		/* const layer_background_matrix = document.getElementById('layer-background-matrix');
		for (let i = 0; i < matrix_length; ++i)
			layer_background_matrix.insertAdjacentHTML('beforeend', LayerBackground.LayerBackgroundMatrixString()); */

		const layer_background_half_left = document.getElementById('layer-background-half-left');
		const layer_background_half_right = document.getElementById('layer-background-half-right');
		const layer_foreground_half_left = this.querySelectorAll('layer-title-left, layer-product-left, #layer-letter-left, layer-person');
		const layer_foreground_half_right = this.querySelectorAll('layer-title-right, layer-product-right, #layer-letter-right');

		for (let i = 0; i < layer_foreground_half_left.length; ++i)
			layer_background_half_left.appendChild(layer_foreground_half_left[i]);
		for (let i = 0; i < layer_foreground_half_right.length; ++i)
			layer_background_half_right.appendChild(layer_foreground_half_right[i]);

		const layer_background_hash = document.getElementsByClassName('layer-background-hash');
		for (let i = 0; i < layer_background_hash.length; ++i)
		{
			for (let j = 0; j < 32; ++j)
				layer_background_hash[i].insertAdjacentText('beforeend',0.5 > Math.random() ? '0' : '1');
		}
	}
}
window.customElements.define('layer-background', LayerBackground);