// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function() {
// 	card.style.display = 'none';
// });


// DOM Traversal
// const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e) {
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// }


// // Cara lebih benar
// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault(); // menghentikan fungsi default dari <a> close
// 		e.stopPropagation();
// 	});
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
// 	card.addEventListener('click', function(e) {
// 		alert('ok');
// 	});
// });


//  - DOM Traversal Method -
// parentNode -> node
// parentElement -> element
// nextSibling -> node
// nextElementSibling -> element
// previousSibling -> node
// previousElementSibling -> element

// const nama = document.querySelector('.nama');
// // console.log(nama.parentElement.parentElement);
// console.log(nama.previousElementSibling);



const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	if(e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	}
}); 