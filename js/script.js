//array
const imgs = [
    'img/o1.webp' ,
    'img/o2.webp' ,
    'img/o3.webp' ,
    'img/o4.webp' ,
    'img/o5.webp'
];

//selezione classe dell'html
const boxImg = document.querySelector(`.box-img`);
console.log (boxImg);

//carica img dinamicamente
for (let i = 0; i < imgs.length; i++) {
    const img = document.createElement(`img`);
    img.src = imgs[i];
    img.classList.add(`img`);
    if (i != 0) {
        img.style.display = `none`;
    }
boxImg.append(img);
}
