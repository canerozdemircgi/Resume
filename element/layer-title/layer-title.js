'use strict';

class LayerTitleLeft extends HTMLElement
{
	static #LayerTitleLeftString(title)
	{
return `\
<span class='layer-title-caption-left'><hr class='hr layer-title-hr-left'><span>${title}</span></span>`;
	}

	get #title() { return this.getAttribute('title'); }
	get #position() { return this.getAttribute('position'); }

	constructor()
	{
		super();

		if (this.#position !== 'none')
			this.insertAdjacentHTML(this.#position, LayerTitleLeft.#LayerTitleLeftString(this.#title));
	}
}
window.customElements.define('layer-title-left', LayerTitleLeft);

class LayerTitleRight extends HTMLElement
{
	static #LayerTitleRightString(title)
	{
return `\
<span class='layer-title-caption-right'><span>${title}</span><hr class='hr layer-title-hr-right'></span>`;
	}

	get #title() { return this.getAttribute('title'); }
	get #position() { return this.getAttribute('position'); }

	constructor()
	{
		super();

		if (this.#position !== 'none')
			this.insertAdjacentHTML(this.#position, LayerTitleRight.#LayerTitleRightString(this.#title));
	}
}
window.customElements.define('layer-title-right', LayerTitleRight);