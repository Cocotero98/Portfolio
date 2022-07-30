let date = new Date();
let year = date.getFullYear();
let copyright = document.querySelector('#copyright');
copyright.innerHTML = `&copy ${year}`;


let toggleMenu = function(id){
    let navUl = document.querySelector(id);
    navUl.classList.toggle('open');
}
let changeArrow = function(id){
    let arrow = document.querySelector(id);
    if(arrow.textContent === 'See more...'){
        arrow.textContent = 'Hide details';
    }else{
        arrow.textContent = 'See more...';
    }
}

let navBtn = document.querySelector('#navBtn').addEventListener('click',()=>{toggleMenu('#navMenu')});
let detailsOne = document.querySelector('#detailsOneBtn').addEventListener('click',()=>{toggleMenu('#detailsOne');changeArrow('#detailsOneBtn')});
let detailsTwo = document.querySelector('#detailsTwoBtn').addEventListener('click',()=>{toggleMenu('#detailsTwo');changeArrow('#detailsTwoBtn')});
let detailsThree = document.querySelector('#detailsThreeBtn').addEventListener('click',()=>{toggleMenu('#detailsThree');changeArrow('#detailsThreeBtn')});
let detailsFour = document.querySelector('#detailsFourBtn').addEventListener('click',()=>{toggleMenu('#detailsFour');changeArrow('#detailsFourBtn')});

