import $ from '../core'

$.prototype.tab = function () {
	for(let i = 0; i < this.length; i++){
		const elem = this[i]
		$(elem).click(() => {
			$(elem)
				.addClass('tab-item--active')
				.siblingsElements()
				.removeClass('tab-item--active')
				.closest('.tab')
				.findElements('.tab-content')
				.removeClass('tab-content--active')
				.getElementByIndex($(elem).getElementIndex())
				.addClass('tab-content--active')

		})
	}
}

$('[data-tabpanel] .tab-item').tab()