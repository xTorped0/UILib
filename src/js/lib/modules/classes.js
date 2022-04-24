import $ from '../core'

$.prototype.addClass = function() {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.classList) continue
		elem.classList.add(...arguments)
	}
	return this
}

$.prototype.removeClass = function() {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.classList) continue
		elem.classList.remove(...arguments)
	}
	return this
}

$.prototype.toggleClass = function(className) {
	if(!className) return this
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.classList) continue
		elem.classList.toggle(className)
	}
	return this
}