import $ from '../core'

$.prototype.html = function(content) {
	const elems = []
	for(let i = 0; i < this.length; i++) {
		if(content) this[i].innerHTML = content
		else elems.push(this[i].innerHTML)
	}

	return elems.length ? elems : this
}

$.prototype.getElementByIndex = function(i) {
	const elem = this[i]
	const objLength = Object.keys(this).length

	for(let i = 0; i < objLength; i++) {
		delete this[i]
	}

	this[0] = elem
	this.length = 1

	return this
}

$.prototype.getElementIndex = function() {
	const parent = this[0].parentNode,
	 			childs = [...parent.children],
				findMyIndex = (item) => item == this[0]
	
	return childs.findIndex(findMyIndex)
}

$.prototype.findElements = function(selector) {
	let numberOfItems = 0,
			counter = 0 

	const copyObj = Object.assign({}, this)

	for(let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].querySelectorAll(selector)

		if(arr.length == 0) continue

		for(let j = 0; j < arr.length; j++) {
			this[counter] = arr[j]
			counter++
		}

		numberOfItems += arr.length
	}

	if(numberOfItems < this.length) {
		for(let j = numberOfItems; j < this.length; j++) {
			delete this[j]
		}
	}

	this.length = numberOfItems

	return this
}

$.prototype.closest = function(selector) {
	let counter = 0

	for(let i = 0; i < this.length; i++) {
		const closest = this[i].closest(selector)
		if(!closest) continue

		this[counter] = closest
		counter++
	}

	for(let i = counter; i < this.length; i++) {
		delete this[i]
	}

	this.length = counter

	return this
}

$.prototype.siblingsElements = function() {
	let numberOfItems = 0,
			counter = 0 

	const copyObj = Object.assign({}, this)

	for(let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].parentNode.children

		for(let j = 0; j < arr.length; j++) {
			if(copyObj[i] === arr[j]) continue
			this[counter] = arr[j]
			counter++
		}

		numberOfItems += arr.length -1
	}

	for(let j = numberOfItems; j < this.length; j++) {
		delete this[j]
	}

	this.length = numberOfItems

	return this
}