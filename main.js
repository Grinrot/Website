const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.13});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const cases={
 'file-000':{
  title:'CODEX 000: The Archivist',
  body:`
    <h2>The Archivist</h2>
    <p><strong>Classification:</strong> Keeper of the Codex</p>
    <p><strong>Status:</strong> Active</p>
    <p><strong>Classification:</strong> Keeper of the Codex</p>
<p><strong>Origin:</strong> Unrecorded</p>
<p><strong>Status:</strong> Active</p>

<h3>Observation</h3>

<p>The Archivist does not create the entities found within Grin Rot. It discovers them, records them, and preserves what survives.</p>

<p>Every mask, relic, photograph, sighting, and whispered account eventually finds its way into the Codex.</p>

<p>Whether the Archivist preserves history or manufactures it has never been determined.</p>

<h3>Archivist's Note</h3>

<p><em>Nothing is truly forgotten. Some things are merely waiting to be cataloged.</em></p>
  `
},
 'file-001':{title:'CODEX 001: The Smile in the Tree Line',body:'A hunter reported seeing a pale face between two poplars off an old ridge trail. The face did not move. The grin did. When he returned with others, every tree in the area had been marked with the same symbol.'},
 'file-002':{title:'CODEX 002: The Doctor Came After Midnight',body:'Local accounts describe a black-beaked figure moving through fog after midnight. No footsteps. No voice. Just the scrape of leather and the smell of wet leaves. Folks around here know better than to ask for a house call.'},
 'file-003':{title:'CODEX 003: The Laughing Thing',body:'The recording is mostly static. Underneath it, there is laughter. Not human. Not animal. Something between a carnival and a warning siren. The tape ends with one clear sentence: do not smile back.'}
};
const modal=document.getElementById('caseModal');
const content=document.getElementById('caseContent');
document.querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>{const item=cases[btn.dataset.case];content.innerHTML=`<span class="file-stamp">RECOVERED DOCUMENT</span><h3>${item.title}</h3><p>${item.body}</p>`;modal.showModal();}));
document.querySelector('.close-modal')?.addEventListener('click',()=>modal.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close();});
