/*
//Array
const imgs = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"];

for (let i = 0;i < imgs.length; i++) {
    console.log (imgs[i]);
}

//ciclo for con template literal
const item = document.querySelector(`.box-img`);
console.log('primo selettore:', item)

for (let i = 0; i < imgs.length; i++) {
    const img = document.createElement('img');
    imgs.src = imgs[i];
    img.classList.add('image');

    console.log('il tag creato è: ', img)
    
    if (i !== 0) {
        imgs.style.display = 'none';
    }

    // (condizione) ? "se è vero" : "se è falso"
    // i !== 0 ? "nome classe"

    console.log( item);
    item.append(img);

    item.innerHTML += `
        <div class="box-imgs imgs-block ${ (i !== 0 ? ... : ...i.)}">
            <img src="${}">
                <div class="button-right">
                    <button><i class="fa-solid fa-circle-chevron-right"></i></button>
                </div>
                <div class="button-left">
                    <button><i class="fa-solid fa-circle-chevron-left"></i></button>
                </div>
        </div>
    `;
}
    */
// Array
const imgs = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"];
for (let i = 0;i < imgs.length; i++) {
    console.log (imgs[i]);
}

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