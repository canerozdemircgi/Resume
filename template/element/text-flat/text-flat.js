"use strict";

class TextFlat extends HTMLElement
{
	get align() { return this.getAttribute('align'); }
	set align(value) { this.setAttribute('align', value); }

	constructor()
	{
		super();

		this.style.textAlign = this.align;
	}
}
window.customElements.define('text-flat', TextFlat);