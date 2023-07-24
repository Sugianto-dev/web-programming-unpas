// KASUS 1 - UBAH WARNA 1x
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
}


// KASUS 2 - UBAH WARNA RANDOM
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol); // agar teksTombol dimasukan kedalam tAcakWarna
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 0); // agar max 255 dan min 0
	const g = Math.round(Math.random() * 255 + 0);
	const b = Math.round(Math.random() * 255 + 0);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



// KASUS 3 - SLIDER WARNA
const sMerah = document.querySelector('input[name = sMerah]');
const sHijau = document.querySelector('input[name = sHijau]');
const sBiru = document.querySelector('input[name = sBiru]');
sMerah.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
sHijau.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
sBiru.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


// KASUS 4
document.body.addEventListener('mousemove', function(e) { // e = event
	// // posisi mouse
	// console.log(e.clientX); // cari koordinat X
	// console.log(e.clientY); // cari koordinat Y
	// // ukuran browser
	// console.log(window.innerWidth);
	const xPos = Math.round((e.clientX / window.innerWidth) * 255);
	const yPos = Math.round((e.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});