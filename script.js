let con=document.querySelector(".container");
let heart=document.querySelector('i');
let a=0
con.addEventListener('dblclick',function(){
   heart.style.transform='translate(-50%,-50%) scale(2)';
   heart.style.opacity=0.8;

   setTimeout(function(){
      heart.style.opacity=0;
   },1000);
   setTimeout(function(){
      heart.style.transform="translate(-50%,-50%) scale(0)";
   },2000)
})