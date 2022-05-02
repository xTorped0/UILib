import $ from '../core'

$.prototype.dropdown = function() {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		const id = elem.getAttribute('id')

		$(elem).click(() => {
			$(`[data-toggle-id='${id}'`).fadeToggle(300);
		})
	}
}

$('.dropdown-toggle').dropdown()