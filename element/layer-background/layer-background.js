'use strict';

class LayerBackground extends HTMLElement
{
	static #alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789カキクケコサシスセソタチツテトナニヌネノハヒフヘホ一二三四五六七八九十';

	static #LayerBackgroundFlatBottomString(page)
	{
return `\
<span class='layer-background-page'><span class='layer-background-page-container font-mono'>${page}</span></span>`;
	}

	static #LayerBackgroundSpiralMiddleString()
	{
return `\
<img class='layer-background-middle' src='resource/main/background.svg'>`;
	}

	static #LayerBackgroundSpiralBottomString(page)
	{
return `\
<span class='layer-background-page-top'><span class='layer-background-page-container font-mono'>${page}</span></span>
<span class='layer-background-page-bottom'><span class='layer-background-page-container font-mono'>${page}</span></span>`;
	}

	static #LayerBackgroundString(page, chunk_middle, chunk_bottom, texts)
	{
return `\
<span id='layer_background_matrix'></span>

<span class='layer-background-half left'>
	<span id='layer_background_half_left_${page}' class='layer-background-half-left'></span>

	<span class='layer-background-bottom-text-left'>${texts[0]}</span>
	<hr class='hr'>
	<span class='layer-background-bottom-text-left'>${texts[1]}</span>
</span>

${chunk_middle}

<span class='layer-background-half right'>
	<span id='layer_background_half_right_${page}' class='layer-background-half-right'></span>

	<span class='layer-background-bottom-text-right'>${texts[2]}</span>
	<hr class='hr'>
	<span class='layer-background-bottom-text-right'>${texts[3]}</span>
</span>

${chunk_bottom}`;
	}

	static #LayerBackgroundMatrixChar()
	{
		let matrix_freq = searchParams.has('matrix_freq') ? Number(searchParams.get('matrix_freq')) : 0.25;
		if (Math.random() < (1 - matrix_freq))
			return '<span>&nbsp;</span>';

		const character = LayerBackground.#alphabet.charAt(Math.floor(Math.random() * LayerBackground.#alphabet.length));
		const rgba = GetRandomRgba(0, 32, 64, 128, 0, 32, 0.03125, 0.125);
		return `<span style='color: ${rgba};'>${character}</span>`;
	}

	get #page() { return this.getAttribute('page'); }
	get #matrix() { return this.hasAttribute('matrix'); }
	get #spiral() { return this.hasAttribute('spiral'); }

	constructor()
	{
		super();

		let chunk_middle;
		let chunk_bottom;
		if (this.#spiral)
		{
			this.classList.add('layer-background-spiral');
			chunk_middle = LayerBackground.#LayerBackgroundSpiralMiddleString();
			chunk_bottom = LayerBackground.#LayerBackgroundSpiralBottomString(this.#page);
		}
		else
		{
			this.classList.add('layer-background-flat');
			chunk_middle = '';
			chunk_bottom = LayerBackground.#LayerBackgroundFlatBottomString(this.#page);
		}

		const mottos_default =
		[
			'',
			'Belge oranı ISO 216 kağıt standardına uygundur\n',
			'',
			'Özge Özdemir - Tüm Hakları Saklıdır ©'
		];

		let texts;
		if (searchParams.has('name'))
		{
			if (searchParams.has('mottos'))
			{
				const mottos = searchParams.get('mottos').split('$');
				texts =
				[
					mottos[0],
					mottos_default[0],
					mottos[1],
					mottos_default[1]
				];
			}
			else
			{
				texts =
				[
					'',
					mottos_default[0],
					'',
					mottos_default[1]
				];
			}
		}
		else
		{
			texts = mottos_default;
		}

		this.insertAdjacentHTML('beforeend', LayerBackground.#LayerBackgroundString(this.#page, chunk_middle, chunk_bottom, texts));

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
					layer_background_matrix.insertAdjacentHTML('beforeend', LayerBackground.#LayerBackgroundMatrixChar());
			};
			setTimeout(matrixCallback, 1000);
		}
	}
}
window.customElements.define('layer-background', LayerBackground);