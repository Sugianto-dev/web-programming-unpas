// DOM Selection
// document.getElementById() -> element
// document.getElementsByTagName() -> HTMLCollection
// document.getElementsByClassName() -> HTMLColection

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';

// document.querySelectorAll() -> NodeList
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}


// // Atau Cara Lain
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// // Atau
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';