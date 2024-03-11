'use strict';

class LayerBackground extends HTMLElement
{
	static #alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	static #matrix_cache = 0.15625 - 0.03125;

	static #LayerBackgroundFlatString(page)
	{
return `\
<span id='layer_background_matrix'></span>

<span class='layer-background-half left'>
	<span id='layer_background_half_left_${page}' class='layer-background-half-left'></span>

	<span class='layer-background-bottom-text-left'>Document ratio matches to ISO 216 paper standard</span>
	<hr class='hr'>
	<span class='layer-background-bottom-text-left'>View it with decent readers for the best quality</span>
</span>

<span class='layer-background-half right'>
	<span id='layer_background_half_right_${page}' class='layer-background-half-right'></span>

	<span class='layer-background-bottom-text-right'>Next Generation Computed Imagination</span>
	<hr class='hr'>
	<span class='layer-background-bottom-text-right'>developed and designed by Caner Özdemir</span>
</span>

<span class='layer-background-page'><span class='layer-background-page-container'>${page}</span></span>`;
	}

    static #LayerBackgroundSpiralString(page)
	{
return `\
<span id='layer_background_matrix'></span>

<span class='layer-background-page-top'><span class='layer-background-page-container'>${page}</span></span>
<span class='layer-background-page-bottom'><span class='layer-background-page-container'>${page}</span></span>

<span class='layer-background-half left'>
	<span id='layer_background_half_left_${page}' class='layer-background-half-left'></span>

	<span class='layer-background-bottom-text-left'>Document ratio matches to ISO 216 paper standard</span>
	<hr class='hr'>
	<span class='layer-background-bottom-text-left'>View it with decent readers for the best quality</span>
</span>

<img class='layer-background-middle' src='resource/main/background.svg'>

<span class='layer-background-half right'>
	<span id='layer_background_half_right_${page}' class='layer-background-half-right'></span>

	<span class='layer-background-bottom-text-right'>Next Generation Computed Imagination</span>
	<hr class='hr'>
	<span class='layer-background-bottom-text-right'>developed and designed by Caner Özdemir</span>
</span>`;
    }

	static #LayerBackgroundMatrixString()
	{
		if (Math.random() < 0.5)
			return '<span>&nbsp;</span>';

		const character = LayerBackground.#alphabet.charAt(Math.floor(Math.random() * LayerBackground.#alphabet.length));
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		const a = Math.random() * LayerBackground.#matrix_cache + 0.03125;
		return `<span style='color: rgba(${r}, ${g}, ${b}, ${a});'>${character}</span>`;
	}

	get #page() { return this.getAttribute('page'); }
	get #matrix() { return this.hasAttribute('matrix'); }
    get #spiral() { return this.hasAttribute('spiral'); }

	constructor()
	{
		super();

        if (this.#spiral)
		{
            this.classList.add('layer-background-spiral');
            this.insertAdjacentHTML('beforeend', LayerBackground.#LayerBackgroundSpiralString(this.#page));
        }
        else
		{
            this.classList.add('layer-background-flat');
            this.insertAdjacentHTML('beforeend', LayerBackground.#LayerBackgroundFlatString(this.#page));
        }

		const layer_background_half_left = document.getElementById(`layer_background_half_left_${this.#page}`);
		const layer_background_half_right = document.getElementById(`layer_background_half_right_${this.#page}`);
		const layer_foreground_half_left = this.querySelectorAll('layer-title-left, layer-product-left, layer-empty-left');
		const layer_foreground_half_right = this.querySelectorAll('layer-title-right, layer-product-right, layer-empty-right');

		for (let i = 0; i < layer_foreground_half_left.length; ++i)
			layer_background_half_left.appendChild(layer_foreground_half_left[i]);
		for (let i = 0; i < layer_foreground_half_right.length; ++i)
			layer_background_half_right.appendChild(layer_foreground_half_right[i]);

		if (this.#matrix)
		{
			const matrixCallback = () =>
			{
				const matrix_length = 54 * Math.floor(Math.round(getComputedStyle(this).getPropertyValue('height').slice(0, -2)) / 25);
				const layer_background_matrix = document.getElementById('layer_background_matrix');
				for (let i = 0; i < matrix_length; ++i)
					layer_background_matrix.insertAdjacentHTML('beforeend', LayerBackground.#LayerBackgroundMatrixString());
			};
			setTimeout(matrixCallback, 1000);
		}
	}
}
window.customElements.define('layer-background', LayerBackground);