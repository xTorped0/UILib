import $ from '../core'

$.prototype.collapse = function(headActive = 'collapse-head--active', contentActive = 'collapse-content--active', paddings = 40) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]

		$(elem).click(() => {
			$(elem).toggleClass(headActive)
			$(elem.nextElementSibling).toggleClass(contentActive)

			if(elem.classList.contains(headActive)) 
				elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + paddings + 'px'
			 else elem.nextElementSibling.style.maxHeight = '0px'
			
		})
	}
}

$('.collapse-head').collapse()