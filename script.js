
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
 if(btn) btn.addEventListener('click',()=>links.classList.toggle('open'));
 const page=document.body.dataset.page;
 document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{
   if(a.dataset.page===page)a.classList.add('active');
 });
});
