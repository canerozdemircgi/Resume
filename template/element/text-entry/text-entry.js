"use strict";

class TextEntryLeft extends HTMLElement
{
	static TextEntryLeftString(text, mark)
	{
return `\
<div class='text-entry-container-left'>${text}</div>${mark}`;
	}

	get text() { return this.getAttribute('text'); }
	set text(value) { this.setAttribute('text', value); }

	get mark() { return this.getAttribute('mark'); }
	set mark(value) { this.setAttribute('mark', value); }

	get br() { return this.getAttribute('br'); }
	set br(value) { this.setAttribute('br', value); }

	get bold() { return this.hasAttribute('bold'); }
	set bold(value) { if (value) this.setAttribute('bold', ''); else this.removeAttribute('bold'); }

	constructor()
	{
		super();

		if ('' === this.mark)
			this.mark = '&#8203;';
		if (true === this.bold)
			this.classList.add('text-entry-bold');
		this.style.marginBottom = this.br;
		this.insertAdjacentHTML('beforeend', TextEntryLeft.TextEntryLeftString(this.text, this.mark));
	}
}
window.customElements.define('text-entry-left', TextEntryLeft);

class TextEntryRight extends HTMLElement
{
	static TextEntryRightString(text, mark)
	{
return `\
${mark}<div class='text-entry-container-right'>${text}</div>`;
	}

	get text() { return this.getAttribute('text'); }
	set text(value) { this.setAttribute('text', value); }

	get mark() { return this.getAttribute('mark'); }
	set mark(value) { this.setAttribute('mark', value); }

	get br() { return this.getAttribute('br'); }
	set br(value) { this.setAttribute('br', value); }

	get bold() { return this.hasAttribute('bold'); }
	set bold(value) { if (value) this.setAttribute('bold', ''); else this.removeAttribute('bold'); }

	constructor()
	{
		super();

		if ('' === this.mark)
			this.mark = '&#8203;';
		if (true === this.bold)
			this.classList.add('text-entry-bold');
		this.style.marginBottom = this.br;
		this.insertAdjacentHTML('beforeend', TextEntryRight.TextEntryRightString(this.text, this.mark));
	}
}
window.customElements.define('text-entry-right', TextEntryRight);