//Copyright section creation
let date = new Date();
let year = date.getFullYear();
let copyright = document.querySelector('#copyright');
copyright.innerHTML = `&copy ${year} Agustin Aguilar`;

//Define functions to display ot hide navMenu or education details
let navigation = document.querySelector('#navMenu');
let navToggle = function(){navigation.classList.toggle('open')};
let toggleMenu = function(id){
    let navUl = document.querySelector(id);
    navUl.classList.toggle('open');
    if(id==='#navMenu'&window.innerWidth>=560){
        navUl.classList.remove('open');
    }
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



let addEventToNavLinks = function(){
    if (window.innerWidth < 560){
    for(element of navLinks) {
    element.addEventListener('click',navToggle)
};
}else if(window.innerWidth >= 560){for(element of navLinks) {
    element.removeEventListener('click',navToggle)
};}
}

addEventToNavLinks();

window.onresize = addEventToNavLinks;


//Last updated
let lastUpdated = new Date(document.lastModified);
let lastYear = lastUpdated.getFullYear();
let lastMonth = lastUpdated.getMonth()+1;
let lastDay = lastUpdated.getDate();
let fullDateUpdated = `${lastMonth}-${lastDay}-${lastYear}`
document.querySelector('#lastUpdated').innerHTML=fullDateUpdated;


//Display Youtube videos
// let displayVideo = function(){
//     let video=document.createElement('iframe');
//     video.width = 560;
//     video.src="https://www.youtube.com/embed/kMG1Lez5ipc";
//     video.title="Pergamino Chamber of Commerce";
//     video.frameborder="0";
//     video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
//     video.allowfullscreen=true;
//     video.autoplay=1;
//     player.replaceWith(video);
// }

//width="560" src="https://www.youtube.com/embed/kMG1Lez5ipc" title="Pergamino Chamber of Commerce" 
// frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// allowfullscreen

// let player = document.querySelector('.play-video');
// player.addEventListener('click', displayVideo);

let projectsDivs=document.getElementsByClassName('hidden-project');

let videosToLoad = document.getElementsByClassName('video');
console.log(videosToLoad)
let replace = function(item){
    let content = item.textContent;
    let video=document.createElement('iframe');
    video.width = 560;
    video.src=content;
    video.title="Pergamino Chamber of Commerce";
    video.frameborder="0";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    video.allowfullscreen="allowfullscreen";
    item.replaceWith(video);
}

const vidOptions={
    threshold: 0,
    rootMargin: '0px 0px 300px 0px'
}

window.onload=()=>{
    if ('IntersectionObserver' in window){
        const observer= new IntersectionObserver((items,observer)=>{
            items.forEach((item)=>{
                if (item.isIntersecting){
                    replace(item.target);
                    console.log(item.target.parentNode);
                    observer.unobserve(item.target);
                }
            })
        },vidOptions);
        for(video of videosToLoad){
            console.log(video.textContent);
            observer.observe(video)
        }
    }
}