import $ from '../core'

$.prototype.carousel = function() {
	for(let i = 0; i < this.length; i++) {
		const elem = this[i]
		const width = window.getComputedStyle(elem.querySelector('.carousel-inner')).width
		const slides = elem.querySelectorAll('.carousel-item')
		const slidesField = elem.querySelector('.carousel-slides')
		const dots = elem.querySelectorAll('.carousel-indicators li')
		const sliderId = elem.getAttribute('id')

		slidesField.style.width = 100 * slides.length + '%'

		slides.forEach(slide => {
			slide.style.width = width
		})

		let offset = 0;
		let slideIndex = 0;

		$(elem.querySelector('[data-slide="next"]')).click((e) => {
			e.preventDefault()

			if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))){
				offset = 0 
				slideIndex = 0
			} else {
				offset += +width.replace(/\D/g, '') 
				slideIndex++
			}
				
			slidesField.style.transform = `translate(-${offset}px)`

			dots.forEach((dot, ind) => {
				if(ind === slideIndex) dot.classList.add('active')
				else dot.classList.remove('active')
			})
		})

		$(elem.querySelector('[data-slide="prev"]')).click((e) => {
			e.preventDefault()

			if(offset == 0){
				offset = (+width.replace(/\D/g, '') * (slides.length - 1)) 
				slideIndex = slides.length - 1
			} else {
				slideIndex--
				offset -= +width.replace(/\D/g, '') 
			}
				
			slidesField.style.transform = `translate(-${offset}px)`

			dots.forEach((dot, ind) => {
				if(ind === slideIndex) dot.classList.add('active')
				else dot.classList.remove('active')
			})
		})

		$(`#${sliderId} .carousel-indicators li`).click(e => {
			const slideTo = +e.target.getAttribute('data-slide-to')

			slideIndex = slideTo
			offset = +width.replace(/\D/g, '') * slideTo

			slidesField.style.transform = `translate(-${offset}px)`

			dots.forEach((dot, ind) => {
				if(ind === slideIndex) dot.classList.add('active')
				else dot.classList.remove('active')
			})
		})
	}
}

$('.carousel').carousel()