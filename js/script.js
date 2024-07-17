   // (condizione) ? "se è vero" : "se è falso"
   // i !== 0 ? "nome classe"

   //item.innerHTML += `
   //    <div class="box-imgs imgs-block ${ (i !== 0 ? ... : ...i.)}">`
   
//Seleziona button
const infoForm = document.querySelector (`button`);

//funzione click
infoForm.addEventListener (`click`,
    function() {

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

    }
)