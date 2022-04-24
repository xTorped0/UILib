import $ from '../core'

$.prototype.addAttribute = function(name, value) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.setAttribute) continue
		elem.setAttribute(name, value)
	}
	return this
}

$.prototype.removeAttribute = function(name) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.removeAttribute) continue
		elem.removeAttribute(name)
	}
	return this
}

$.prototype.toggleAttribute = function(name, value) {
	if(!className) return this
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.getAttribute) continue
		if(elem.getAttribute(name)) {
			elem.removeAttribute(name)
		} else {
			elem.setAttribute(name, value)
		}
	}
	return this
}