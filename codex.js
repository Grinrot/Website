const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');

toggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});

nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

const entry=document.querySelector('[data-codex-entry]');
if(entry&&typeof gtag==='function'){
  gtag('event','codex_story_view',{
    story_slug:entry.dataset.codexEntry,
    story_title:entry.dataset.codexTitle
  });
}

document.querySelectorAll('[data-track="shop"]').forEach(link=>link.addEventListener('click',()=>{
  if(typeof gtag==='function')gtag('event','shop_click',{link_url:link.href});
}));
