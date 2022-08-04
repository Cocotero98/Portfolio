//Copyright section creation
let date = new Date();
let year = date.getFullYear();
let copyright = document.querySelector('#copyright');
copyright.innerHTML = `&copy ${year} Agustin Aguilar`;

//Define functions to display ot hide navMenu or education details
let toggleMenu = function(id){
    let navUl = document.querySelector(id);
    navUl.classList.toggle('open');
}
let changeArrow = function(id){
    let arrow = document.querySelector(id);
    if(arrow.textContent === 'See details...'){
        arrow.textContent = 'Hide details';
    }else{
        arrow.textContent = 'See details...';
    }
}
let navLinks= document.getElementsByClassName('navLinks');

//Add eventlisteners for navMenu and education details
let navBtn = document.querySelector('#navBtn').addEventListener('click',()=>{toggleMenu('#navMenu')});
let detailsOne = document.querySelector('#detailsOneBtn').addEventListener('click',()=>{toggleMenu('#detailsOne');changeArrow('#detailsOneBtn')});
let detailsTwo = document.querySelector('#detailsTwoBtn').addEventListener('click',()=>{toggleMenu('#detailsTwo');changeArrow('#detailsTwoBtn')});
let detailsThree = document.querySelector('#detailsThreeBtn').addEventListener('click',()=>{toggleMenu('#detailsThree');changeArrow('#detailsThreeBtn')});
let detailsFour = document.querySelector('#detailsFourBtn').addEventListener('click',()=>{toggleMenu('#detailsFour');changeArrow('#detailsFourBtn')});
for(element of navLinks) {
    console.log(element);
    element.addEventListener('click',()=>{toggleMenu('#navMenu')})
};

let lastUpdated = new Date(document.lastModified);
let lastYear = lastUpdated.getFullYear();
let lastMonth = lastUpdated.getMonth();
let lastDay = lastUpdated.getDay();
let fullDateUpdated = `${lastMonth}-${lastDay}-${lastYear}`

document.querySelector('#lastUpdated').innerHTML=fullDateUpdated;