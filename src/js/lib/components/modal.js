import $ from '../core'

$.prototype.modal = function(created) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		const target = elem.getAttribute('data-target')
		$(elem).click((e) => {
			e.preventDefault()
			$(target).fadeIn(500)
			document.body.style.overflow = 'hidden'
		})

		
		const closeElems = document.querySelectorAll(`${target} [data-close]`)
		closeElems.forEach(elem => {
			$(elem).click(() => {
				$(target).fadeOut(500)
				document.body.style.overflow = ''
				if(created) document.querySelector(target).remove()
			})
		})

		$(target).click((e) => {
			if(e.target.classList.contains('modal')) {
				$(target).fadeOut(500)
				document.body.style.overflow = ''
				if(created) document.querySelector(target).remove()
			}
		})
	}
}

$('[data-toggle="modal"]').modal()

$.prototype.createModal = function({ text, btns, withClose } = {}) {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		let modal = document.createElement('div')
		modal.classList.add('modal')
		modal.setAttribute('id', elem.getAttribute('data-target').slice(1))

		const btnNodes = btns.map(({ classNames, text, onClick, close }) => {
			const btn = document.createElement('button')
			btn.classList.add('btn', ...classNames)
			btn.textContent = text

			if(close) btn.setAttribute('data-close', true)
			if(onClick && typeof onClick === 'function') $(btn).click(onClick)

			return btn
		})

		modal.innerHTML = `
			<div class="modal-dialog">
				<div class="modal-content">
						${ withClose ? 
							`<button class="close" data-close>
									<span>&times;</span>
							</button>` : ''
						}
						<div class="modal-header">
								<div class="modal-title">
									${text.title}
								</div>
						</div>
						<div class="modal-body">
							${text.body}
						</div>
						<div class="modal-footer">
						</div>
				</div>
			</div>
		`

		modal.querySelector('.modal-footer').append(...btnNodes)
		document.body.appendChild(modal)

		$(elem).modal(true)
		$(elem.getAttribute('data-target')).fadeIn(500)
	}
}