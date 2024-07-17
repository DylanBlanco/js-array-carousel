//Array
const img = ["img01","img02","img03","img04","img05"];

for (let i = 0;i < img.length; i++) {
    console.log (img[i]);
}

//template literal
const item = document.querySelector (`.box-img`);

for (let i = 0; i < img.length; i++) {
    const img = document.createElement('img');
    img.src = img[i];
    img.classList.add('image');

    if (i !== 0) {
        img.style.display = 'none';
    }
    item.append(img);

    item.innerHTML += `
        <div class="box-img img-block">
            <img src="${`img/01.webp`}">
                <div class="button-right">
                    <button><i class="fa-solid fa-circle-chevron-right"></i></button>
                </div>
                <div class="button-left">
                    <button><i class="fa-solid fa-circle-chevron-left"></i></button>
                </div>
        </div>
    `;
}