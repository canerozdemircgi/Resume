'use strict';

class LayerStamp extends HTMLElement
{
	static #LayerStampString(sign, radius_padding, font, font_padding, color, degree)
	{
return `\
<svg class='layer-stamp-circle-big'>
	<circle cx='50%' cy='50%' r='calc(50% - 2px)' fill='none' stroke='var(--inactive-color)' stroke-width='2px' stroke-dasharray='13.58px 13.58px'></circle>
</svg>
<span class='layer-stamp-circle-small' style='width: calc(100% - ${radius_padding} * 2); height: calc(100% - ${radius_padding} * 2); margin: ${radius_padding};'>
	<span class='layer-stamp-text' style='width: calc(100% + (${radius_padding} + 10px) * 2); margin: 0 calc(-${radius_padding} - 10px); padding: ${font_padding} 0; font: ${font}; text-shadow: 0 0 24px ${color}, 0 0 24px ${color}, 0 0 24px ${color}; border-top: 2px solid ${color}; border-bottom: 2px solid ${color}; transform: rotate(${degree});'>${sign}</span>
</span>`;
	}

	get #sign() { return this.getAttribute('sign'); }
	get #radius_padding() { return this.getAttribute('radius_padding'); }
	get #font() { return this.getAttribute('font'); }
	get #font_padding() { return this.getAttribute('font_padding'); }
	get #color() { return this.getAttribute('color'); }
	get #degree() { return this.getAttribute('degree'); }

	constructor()
	{
		super();

		this.insertAdjacentHTML('beforeend', LayerStamp.#LayerStampString(this.#sign, this.#radius_padding, this.#font, this.#font_padding, this.#color, this.#degree));

		// new ResizeObserver(entries => this.style.width = `${entries[0].target.clientHeight}px`).observe(this);
	}
}
window.customElements.define('layer-stamp', LayerStamp);