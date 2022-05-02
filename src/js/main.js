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

$('#trigger').click(() => {
	$('#trigger').createModal({ 
		text: {
			title: 'Modal Title 2',
			body: 'Lorem'
		},
		btns: [
			{
				classNames: ['btn-danger'],
				close: true,
				text: 'Close',
			},
			{
				classNames: ['btn-primary'],
				close: false,
				text: 'Save Data',
				onClick: () => { console.log('Save Data was clicked!'); }
			},
			{
				classNames: ['btn-primary'],
				close: false,
				text: 'Get new info',
				onClick: () => { console.log('Get new info was clicked!'); }
			}
		],
		withClose: true
	})
})