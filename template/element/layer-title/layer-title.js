"use strict";

class LayerTitleLeft extends HTMLElement
{
	static LayerTitleLeftString(title)
	{
return `\
<div class='layer-title-caption-left'><hr class='hr layer-title-hr-left'><span>${title}</span></div>`;
	}

	get title() { return this.getAttribute('title'); }
	set title(value) { this.setAttribute('title', value); }

	get position() { return this.getAttribute('position'); }
	set position(value) { this.setAttribute('position', value); }

	constructor()
	{
		super();

		if ('none' !== this.position)
			this.insertAdjacentHTML(this.position, LayerTitleLeft.LayerTitleLeftString(this.title));
	}
}
window.customElements.define('layer-title-left', LayerTitleLeft);

class LayerTitleRight extends HTMLElement
{
	static LayerTitleRightString(title)
	{
return `\
<div class='layer-title-caption-right'><span>${title}</span><hr class='hr layer-title-hr-right'></div>`;
	}

	get title() { return this.getAttribute('title'); }
	set title(value) { this.setAttribute('title', value); }

	get position() { return this.getAttribute('position'); }
	set position(value) { this.setAttribute('position', value); }

	constructor()
	{
		super();

		if ('none' !== this.position)
			this.insertAdjacentHTML(this.position, LayerTitleRight.LayerTitleRightString(this.title));
	}
}
window.customElements.define('layer-title-right', LayerTitleRight);