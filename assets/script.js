const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const slideImg = document.getElementById('slide');
const slideTagLine = document.querySelector('#banner p');
let dots = document.getElementsByClassName('dot');

i = 0

function slideUp() {
	dots[i].classList.remove('dot_selected')
	i++
	if (i >= slides.length) {
		i = 0
	}
	slideImg.setAttribute('src', 'assets/images/slideshow/' + slides[i].image);
	slideTagLine.innerHTML = slides[i].tagLine;
	dots[i].classList.add('dot_selected')
}

function slideDown() {
	dots[i].classList.remove('dot_selected')
	i--
	if (i < 0) {
		i = slides.length - 1
	}
	slideImg.setAttribute('src', 'assets/images/slideshow/' + slides[i].image);
	slideTagLine.innerHTML = slides[i].tagLine;
	dots[i].classList.add('dot_selected')
}

arrowLeft.addEventListener('click', () => {
	slideDown()
});

arrowRight.addEventListener('click', () => {
	slideUp()
});