document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn');
  const mobileLinks=document.querySelector('.mobile-links');
  if(btn && mobileLinks){
    btn.addEventListener('click',()=>{
      const open=mobileLinks.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    mobileLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      mobileLinks.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }));
  }
  const page=document.body.dataset.page;
  document.querySelectorAll('[data-page]').forEach(a=>a.classList.toggle('active',a.dataset.page===page));
  const top=document.querySelector('.scroll-top');
  if(top) top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
});
