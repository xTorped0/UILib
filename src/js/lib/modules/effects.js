import $ from '../core'

// private functions

const _fadeOut = (elem) => 
(complection) => {
	elem.style.opacity = 1 - complection
	if(complection === 1) {
		elem.style.display = 'none'
	}
}

const _fadeIn = (elem) =>
 	(complection) => {
		elem.style.opacity = complection
	}

$.prototype.animateOverTime = function(duration, callback, finalFunc) {
	let startTime

	function _animateOverTime(timestamp) {
		if(!startTime) startTime = timestamp

		let timeElapsed = timestamp -  startTime,
				complection = Math.min(timeElapsed / duration, 1)

		callback(complection)

		if(timeElapsed < duration) requestAnimationFrame(_animateOverTime)
		else if(typeof finalFunc === 'function') finalFunc()
	}

	return _animateOverTime
}

$.prototype.fadeIn = function(duration, display = 'block', fin) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		elem.style.display = display

		const ani = this.animateOverTime(duration, _fadeIn(elem), fin)
		requestAnimationFrame(ani)
	}
}

$.prototype.fadeOut = function(duration, fin) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
	
		const ani = this.animateOverTime(duration, _fadeOut(elem), fin)
		requestAnimationFrame(ani)
	}
}

$.prototype.fadeToggle = function(duration, display = 'block', fin) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		let ani

		if(window.getComputedStyle(elem).display === 'none'){
			elem.style.display = display
			ani = this.animateOverTime(duration, _fadeIn(elem), fin)
		} else ani = this.animateOverTime(duration, _fadeOut(elem), fin)
		
	
		requestAnimationFrame(ani)
	}
}