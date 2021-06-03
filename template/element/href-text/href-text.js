"use strict";

class HrefText extends HTMLAnchorElement
{
	get classic() { return this.hasAttribute('classic'); }
	set classic(value) { if (value) this.setAttribute('classic', ''); else this.removeAttribute('classic'); }

	get color_light() { return this.getAttribute('color_light'); }
	set color_light(value) { this.setAttribute('color_light', value); }

	get color_light_hover() { return this.getAttribute('color_light_hover'); }
	set color_light_hover(value) { this.setAttribute('color_light_hover', value); }

	constructor()
	{
		super();

		this.className = 'href-text selectable';
		if ('' === this.innerText)
			this.innerText = this.getAttribute('href');
		if (this.classic)
		{
			this.style = `color: ${this.color_light};`;
			this.onmouseover = () => { this.style.color = `${this.color_light_hover}`; };
			this.onmouseout = () => { this.style.color = `${this.color_light}`; };
		}
		else
		{
			this.style = `text-shadow: 0 0 4px ${this.color_light}, 0 0 4px ${this.color_light};`;
			this.onmouseover = () => { this.style.textShadow = `0 0 4px ${this.color_light_hover}, 0 0 4px ${this.color_light_hover}`; };
			this.onmouseout = () => { this.style.textShadow = `0 0 4px ${this.color_light}, 0 0 4px ${this.color_light}`; };
		}
	}
}
window.customElements.define('href-text', HrefText, {extends: 'a'});