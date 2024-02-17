'use strict';

class TextEntryLeft extends HTMLElement
{
	static #TextEntryLeftString(text, mark)
	{
return `\
<span>${text}</span>${mark}`;
	}

	get #text() { return this.getAttribute('text'); }
	get #br() { return this.getAttribute('br'); }
	get #bold() { return this.hasAttribute('bold'); }
	get #drawn() { return this.hasAttribute('drawn'); }

	get #mark() { return this.getAttribute('mark'); }
	set #mark(value) { this.setAttribute('mark', value); }

	constructor()
	{
		super();

		if (this.#bold === true)
			this.classList.add('text-entry-medium');
		if (this.#drawn === true)
			this.classList.add('text-entry-drawn');

		if (this.#mark === '')
			this.#mark = '&#8203;';
		else if (this.#mark === '_star-white')
			this.#mark = `<img class='text-entry-mark-img-left' src='resource/product/Star-White.svg'>`;
		else if (this.#mark === '_star-black')
			this.#mark = `<img class='text-entry-mark-img-left' src='resource/product/Star-Black.svg'>`;
		else
			this.#mark = `<span class='text-entry-medium'>${this.#mark}</span>`;

		this.style.marginBottom = this.#br;
		this.insertAdjacentHTML('beforeend', TextEntryLeft.#TextEntryLeftString(this.#text, this.#mark));
	}
}
window.customElements.define('text-entry-left', TextEntryLeft);

class TextEntryRight extends HTMLElement
{
	static #TextEntryRightString(text, mark)
	{
return `\
${mark}<span>${text}</span>`;
	}

	get #text() { return this.getAttribute('text'); }
	get #br() { return this.getAttribute('br'); }
	get #bold() { return this.hasAttribute('bold'); }
	get #drawn() { return this.hasAttribute('drawn'); }

	get #mark() { return this.getAttribute('mark'); }
	set #mark(value) { this.setAttribute('mark', value); }

	constructor()
	{
		super();

		if (this.#bold === true)
			this.classList.add('text-entry-medium');
		if (this.#drawn === true)
			this.classList.add('text-entry-drawn');

		if (this.#mark === '')
			this.#mark = '&#8203;';
		else if (this.#mark === '_star-white')
			this.#mark = `<img class='text-entry-mark-img-right' src='resource/product/Star-White.svg'>`;
		else if (this.#mark === '_star-black')
			this.#mark = `<img class='text-entry-mark-img-right' src='resource/product/Star-Black.svg'>`;
		else
			this.#mark = `<span class='text-entry-medium'>${this.#mark}</span>`;

		this.style.marginBottom = this.#br;
		this.insertAdjacentHTML('beforeend', TextEntryRight.#TextEntryRightString(this.#text, this.#mark));
	}
}
window.customElements.define('text-entry-right', TextEntryRight);