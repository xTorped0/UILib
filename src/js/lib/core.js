const $ = function(selector) {
	return new init(selector)
}

function init(selector) {
	if(!selector) return this

	if(selector.tagName) {
		this[0] = selector
		this.length = 1
		return this
	} 

	Object.assign(this, document.querySelectorAll(selector))
	this.length = document.querySelectorAll(selector).length
}

init.prototype = $.prototype

window.$ = $

export default $