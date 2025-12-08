'use strict';

class LayerProductLeft extends HTMLElement
{
	static #LayerProductString(category, label, product, score, badge, tag)
	{
return `\
<img class='layer-product-img' src='resource/product/${category}/${encodeURIComponent(product)}.svg'>
<span class='layer-product-container'>
	<span class='layer-product-caption-container'>
		<span>${label}</span>
		<span class='layer-tag layer-product-tag'>${tag}</span>
		<img class='layer-product-badge' src='${badge}'>
		<img class='layer-product-circle' src='resource/main/Target.svg' style='rotate: ${GetRandomInt(0, 360)}deg; transform: scaleX(${GetRandomSelect([-1, 1])});'>
	</span>
	<span class='layer-product-progress-container'>
		<span class='layer-product-progress layer-tag' style='width: ${score}%;'>Candidate Selected</span>
		<span class='layer-product-progress-remain' style='width: ${100 - score}%;'></span>
	</span>
</span>`;
	}

	get #category() { return this.getAttribute('category'); }
	get #product() { return this.getAttribute('product'); }
	get #score() { return this.getAttribute('score'); }

	get #label() { return this.getAttribute('label'); }
	set #label(value) { this.setAttribute('label', value); }

	get #badge() { return this.getAttribute('badge'); }
	set #badge(value) { this.setAttribute('badge', value); }

	get #tag() { return this.getAttribute('tag'); }
	set #tag(value) { this.setAttribute('tag', value); }

	constructor()
	{
		super();

		if (!this.hasAttribute('label'))
			this.#label = this.#product;

		if (this.hasAttribute('tag'))
			this.#tag = `, ${this.#tag}`;
		else
			this.#tag = '';

		if (this.hasAttribute('badge'))
			this.#badge = `resource/product/badge/Badge - ${this.#badge}.svg`;
		else
			this.#badge = 'resource/other/Empty.svg';

		this.insertAdjacentHTML('beforeend', LayerProductLeft.#LayerProductString(this.#category, this.#label, this.#product, this.#score, this.#badge, this.#tag));
	}
}
window.customElements.define('layer-product-left', LayerProductLeft);

class LayerProductRight extends LayerProductLeft
{
}
window.customElements.define('layer-product-right', LayerProductRight);