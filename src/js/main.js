import './lib/lib'

$('#first').on('click', () => {
	$('div').getElementByIndex(1).fadeToggle(800)
})

$('[data-count="second"]').on('click', () => {
	$('div').getElementByIndex(2).fadeToggle(800)
})

$('button').getElementByIndex(2).on('click', () => {
	$('.w-500').fadeToggle(800)
})