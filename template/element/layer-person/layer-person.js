"use strict";

class LayerPerson extends HTMLElement
{
	static LayerPersonString()
	{
return `\
<div></div>
<layer-stamp
	sign='RESUME'
	radius='256px'
	radius1_padding='10px'
	radius2_padding='26px'
	font='32px/32px "Roboto Mono", monospace'
	font_padding='24px'
	color='var(--stamp-green-color)'
	degree='-24deg'
	style='margin-left: auto;'>
</layer-stamp>`;
	}

	constructor()
	{
		super();

		this.insertAdjacentHTML('beforeend', LayerPerson.LayerPersonString());
	}
}
window.customElements.define('layer-person', LayerPerson);