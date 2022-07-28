let date = new Date();
let year = date.getFullYear();
let copyright = document.querySelector('#copyright');
copyright.innerHTML = `&copy ${year}`;