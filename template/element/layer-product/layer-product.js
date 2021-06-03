"use strict";

class LayerProductLeft extends HTMLElement
{
	static LayerProductString(category, product, title, score, color)
	{
return `\
<img alt='!!!!!!!!!!' class='layer-product-img-left' src='template/resource/product/${category}/${title}.svg' style='border-top: 2px solid ${color}; border-bottom: 2px solid ${color}; border-left: 2px solid ${color};'>
<div class='layer-product-container-left' style='border-top: 2px solid ${color};'>
	<div class='layer-product-caption-container-left'>
		<div>${product}</div>
		<svg class='layer-product-circle-left'>
			<circle cx='50%' cy='50%' r='43.75%' fill='none' stroke='${color}' stroke-width='2px' stroke-dasharray='13.625px 13.625px'></circle>
			<circle cx='50%' cy='50%' r='25%' fill='${color}'></circle>
		</svg>
	</div>
	<div class='layer-product-progress-container-left' style='border-bottom: 2px solid ${color}; border-right: 2px solid ${color};'>
		<div class='layer-product-progress-left' style='width: ${score}%; background-color: ${color};'></div>
	</div>
</div>`;
	}

	get category() { return this.getAttribute('category'); }
	set category(value) { this.setAttribute('category', value); }

	get product() { return this.getAttribute('product'); }
	set product(value) { this.setAttribute('product', value); }

	get label() { return this.getAttribute('label'); }
	set label(value) { this.setAttribute('label', value); }

	get score() { return this.getAttribute('score'); }
	set score(value) { this.setAttribute('score', value); }

	get color() { return this.getAttribute('color'); }
	set color(value) { this.setAttribute('color', value); }

	constructor()
	{
		super();
		this.className = 'layer-product-left';

		if (null === this.label)
			this.label = this.product;
		this.insertAdjacentHTML('beforeend', LayerProductLeft.LayerProductString(this.category, this.label, encodeURIComponent(this.product), this.score, this.color));
	}
}
window.customElements.define('layer-product-left', LayerProductLeft);

class LayerProductRight extends LayerProductLeft /* HTMLElement */
{
/*
	static LayerProductString(category, product, title, score, color)
	{
return `\
<div class='layer-product-container-right' style='border-top: 2px solid ${color};'>
	<div class='layer-product-caption-container-right'>
		<svg class='layer-product-circle-right'>
			<circle cx='50%' cy='50%' r='43.75%' fill='none' stroke='${color}' stroke-width='2px' stroke-dasharray='13.625px 13.625px'></circle>
			<circle cx='50%' cy='50%' r='25%' fill='${color}'></circle>
		</svg>
		<div>${product}</div>
	</div>
	<div class='layer-product-progress-container-right' style='border-bottom: 2px solid ${color}; border-left: 2px solid ${color};'>
		<div class='layer-product-progress-right' style='width: ${score}%; background-color: ${color};'></div>
	</div>
</div>
<img alt='!!!!!!!!!!' class='layer-product-img-right' src='template/resource/product/${category}/${title}.svg' style='border-top: 2px solid ${color}; border-bottom: 2px solid ${color}; border-right: 2px solid ${color};'>`;
	}

	get category() { return this.getAttribute('category'); }
	set category(value) { this.setAttribute('category', value); }

	get product() { return this.getAttribute('product'); }
	set product(value) { this.setAttribute('product', value); }

	get label() { return this.getAttribute('label'); }
	set label(value) { this.setAttribute('label', value); }

	get score() { return this.getAttribute('score'); }
	set score(value) { this.setAttribute('score', value); }

	get color() { return this.getAttribute('color'); }
	set color(value) { this.setAttribute('color', value); }

	constructor()
	{
		super();
		this.className = 'layer-product-right';

		if (null === this.label)
			this.label = this.product;
		this.insertAdjacentHTML('beforeend', LayerProductRight.LayerProductString(this.category, this.label, encodeURIComponent(this.product), this.score, this.color));
	}
*/
}
window.customElements.define('layer-product-right', LayerProductRight);