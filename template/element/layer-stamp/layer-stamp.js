"use strict";

class LayerStamp extends HTMLElement
{
	static LayerStampString(sign, radius1_padding, radius2_padding, font, font_padding, color, degree)
	{
return `\
<svg class='layer-stamp-circle-big' style='width: calc(100% - calc(${radius1_padding} * 2)); height: calc(100% - calc(${radius1_padding} * 2)); margin: ${radius1_padding};'>
	<circle cx='50%' cy='50%' r='calc(50% - 2px)' fill='none' stroke='var(--inactive-color)' stroke-width='2px' stroke-dasharray='13.625px 13.625px'></circle>
</svg>
<div class='layer-stamp-circle-small' style='width: calc(100% - calc(${radius2_padding} * 2)); height: calc(100% - calc(${radius2_padding} * 2)); margin: ${radius2_padding};'>
	<div class='layer-stamp-text' style='width: calc(100% + calc(${radius2_padding} * 2)); margin: 0 -${radius2_padding}; padding: ${font_padding} 0; font: ${font}; text-shadow: 0 0 24px ${color}, 0 0 24px ${color}, 0 0 24px ${color}; border-top: 2px solid ${color}; border-bottom: 2px solid ${color}; transform: rotate(${degree});'>${sign}</div>
</div>`;
	}

	get sign() { return this.getAttribute('sign'); }
	set sign(value) { this.setAttribute('sign', value); }

	get radius() { return this.getAttribute('radius'); }
	set radius(value) { this.setAttribute('radius', value); }

	get radius1_padding() { return this.getAttribute('radius1_padding'); }
	set radius1_padding(value) { this.setAttribute('radius1_padding', value); }

	get radius2_padding() { return this.getAttribute('radius2_padding'); }
	set radius2_padding(value) { this.setAttribute('radius2_padding', value); }

	get font() { return this.getAttribute('font'); }
	set font(value) { this.setAttribute('font', value); }

	get font_padding() { return this.getAttribute('font_padding'); }
	set font_padding(value) { this.setAttribute('font_padding', value); }

	get color() { return this.getAttribute('color'); }
	set color(value) { this.setAttribute('color', value); }

	get degree() { return this.getAttribute('degree'); }
	set degree(value) { this.setAttribute('degree', value); }

	constructor()
	{
		super();

		this.style.width = this.radius;
		this.style.height = this.radius;

		this.insertAdjacentHTML('beforeend', LayerStamp.LayerStampString(this.sign, this.radius1_padding, this.radius2_padding, this.font, this.font_padding, this.color, this.degree));
	}
}
window.customElements.define('layer-stamp', LayerStamp);