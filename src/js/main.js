import './lib/lib'


$('div').click(function() {
	console.log($(this).getElementIndex());
})

// console.log($('div').getElementByIndex(2).findElements('.more'))
console.log($('.more').getElementByIndex(0).siblingsElements())
