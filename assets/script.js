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

// Ajout des points de navigation et du dot_selected sur le premier point
const dotContainer = document.querySelector('.dots');
for (let slide = 0; slide < slides.length; slide++) {
	const span = document.createElement('span');
	span.classList.add('dot');
	if (slide === 0) {
		span.classList.add('dot_selected');
	};
	dotContainer.appendChild(span);
}

// Initialisation des variables
let i = 0;
const dot = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const slideImg = document.querySelector('.banner-img');
const slideTagLine = document.querySelector('#banner p');

// Suppression de la classe 'dot_selected' et ajout de la classe 'dot_selected' sur le point correspondant au slide actuel. Changement de l'image et du texte du tagLine
function changeSlide () {
	document.querySelector('.dot_selected').classList.remove('dot_selected');
	slideImg.src = 'assets/images/slideshow/' + slides[i].image;
	slideTagLine.innerHTML = slides[i].tagLine;
	dot[i].classList.add('dot_selected')
}

// +1 sur i, si i est supérieur ou égal à la longueur du tableau slides, i est réinitialisé à 0 et appel de la fonction changeSlide
function slideUp() {
	i++;
	if (i >= slides.length) {
		i = 0
	};
	changeSlide ()
};

// -1 sur i, si i est inférieur à 0, i est réinitialisé à la longueur du tableau slides - 1 et appel de la fonction changeSlide
function slideDown() {
	i--;
	if (i < 0) {
		i = slides.length - 1
	};
	changeSlide ()
};

// Appel de la fonction slideDown lors du clic sur la flèche de gauche
arrowLeft.addEventListener('click', () => {
	slideDown()
});

// Appel de la fonction slideUp lors du clic sur la flèche de droite
arrowRight.addEventListener('click', () => {
	slideUp()
});