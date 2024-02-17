'use strict';

class HrefMain extends HTMLElement
{
	static #HrefMainString(id, href, text)
	{
return `\
<a id='${id}' class='href-main' href='${href}'>${text}</a>`;
	}

	get #href() { return this.getAttribute('href'); }

	constructor()
	{
		super();

		const id = Date.now().toString(36) + Math.random().toString(36).replace('.', '');

		if (this.innerHTML === '')
			this.innerHTML = this.#href.replace(/https:\/\/|mailto:/, '');

		const innerHTML = `${this.innerHTML}`;
		this.innerHTML = null;
		this.insertAdjacentHTML('beforeend', HrefMain.#HrefMainString(id, this.#href, innerHTML));

		const node_href = document.getElementById(id);

		if (node_href.host !== window.location.host || this.href.indexOf('redirect.html?address=') >= 0)
			node_href.setAttribute('target', '_blank');
	}
}
window.customElements.define('href-main', HrefMain);