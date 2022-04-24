import $ from '../core'

$.prototype.show = function() {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.style) continue

		elem.style.display = ''
	}

	return this
}

$.prototype.hide = function() {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.style) continue

		elem.style.display = 'none'
	}

	return this
}

$.prototype.toggle = function() {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		if(!elem.style) continue

		if(elem.style.display === 'none') elem.style.display = ''
		else elem.style.display = 'none'
	}

	return this
}
