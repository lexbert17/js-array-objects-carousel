// // creo elemento array immagini 

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let imageString =""
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    console.log(element.image);
    imageString +=
    `<div class="item"> 
        <img class="big-image" src="./${element.image}" alt="">
        <div class="description">
            <h2>${element.title}</h2>
            <p>${element.text}</p>
        </div>    
    </div>`
    console.log(imageString);
}
const itemsElem = document.querySelector (".items")
itemsElem.innerHTML += imageString;
console.log(itemsElem);
let currentIndex = 0;
const slideElems = document.querySelectorAll(".item")
slideElems[currentIndex].classList.add("active");

// pulsante avanti

const backwardsInterval =""


    document.querySelector(".next").addEventListener ("click", function () { 
    clearInterval(forwardInterval)
    slideElems[currentIndex].classList.remove("active"); 
    if (currentIndex < slideElems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    }
    slideElems[currentIndex].classList.add("active");

});   

// pulsante indietro

document.querySelector(".prev").addEventListener("click", function() {
    clearInterval(forwardInterval)
    slideElems[currentIndex].classList.remove("active");
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideElems.length - 1;
    }
    slideElems[currentIndex].classList.add("active");
   
})

    let forwardInterval =setInterval(function(){
    slideElems[currentIndex].classList.remove("active");
    
    if (currentIndex < slideElems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    }
    slideElems[currentIndex].classList.add("active");
}, 3000)