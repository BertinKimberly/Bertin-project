let body=document.getElementsByTagName('body');
let header=document.querySelector('.navbar');

body.addEventListener('scroll',()=>{
 header.style.position=fixed;
})