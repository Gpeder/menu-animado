const button = document.querySelector('.btn-menu');
const sideBar = document.querySelector('.side-bar');
const container = document.querySelector('.container');
const bg = document.querySelector('.bg');

button.addEventListener('click',() =>{
    button.classList.toggle('active');
    sideBar.classList.toggle('active');
    container.classList.toggle('active');
    bg.classList.toggle('active');
    document.body.style.backgroundColor = sideBar.classList.contains('active') ?  '#34495e': '#ecf0f1';
})


bg.addEventListener('click',() =>{
    button.classList.remove('active');
    sideBar.classList.remove('active');
    container.classList.remove('active');
    bg.classList.remove('active');
    document.body.style.backgroundColor =  '#ecf0f1';
})