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
    <p><strong>Classification:</strong> Keeper of the Codex</p>
    <p><strong>Origin:</strong> Unrecorded</p>
    <p><strong>Status:</strong> Active</p>

    <h3>Observation</h3>

    <p>The Archivist gathers the entities, relics, sightings, and accounts that survive within Grin Rot.</p>

    <p>Its purpose remains uncertain. It observes, preserves, and reveals only what it chooses.</p>

    <h3>Archivist's Note</h3>

    <p><em>Nothing is truly forgotten. Some things are merely waiting to be cataloged.</em></p>
  `
},
  
 'file-001':{title:'CODEX 001: The False Saint',body: `<p><strong>Classification:</strong> Cult Entity</p>
<p><strong>Source:</strong> Anonymous Parish Records</p>
<p><strong>Status:</strong> Active</p>

<h3>Evidence Summary</h3>

<p>
Multiple abandoned churches throughout Appalachia contain the same crude symbol carved into their altars. Survivors insist a smiling figure stood among the congregation, though no photographs have ever clearly captured his face.
</p>

<h3>Archivist's Note</h3>

<p><em>No recognized church has ever acknowledged The False Saint. That has never stopped people from praying to him.
</em></p>
`
},
 'file-002': {
  title: 'CODEX 002: Fear of Death',
  body: `
    <p><strong>Classification:</strong> Found Footage</p>
    <p><strong>Source:</strong> Anonymous Submission</p>
    <p><strong>Status:</strong> Unresolved</p>

    <h3>Evidence Summary</h3>

    <p>
      A brief recording recovered without identifying information.
      The footage appears to document a direct encounter with an unidentified entity.
      No additional context accompanied the file.
    </p>

    <video controls playsinline preload="metadata"
       poster="fear-death-thumb.png"
       style="width:100%; border-radius:12px; margin-top:1rem;">
      <source src="fear-death-001.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>

    <h3>Archivist's Note</h3>

    <p><em>Fear of death is common. Recognition is something else entirely.</em></p>
  `
},
 'file-003':{title:'CODEX 003: The Laughing Thing',body:'The recording is mostly static. Underneath it, there is laughter. Not human. Not animal. Something between a carnival and a warning siren. The tape ends with one clear sentence: do not smile back.'},
 'file-004': {
  title: 'CODEX 004: Recovered Footage',
  body: `
    <p><strong>Classification:</strong> Recovered Media</p>
    <p><strong>Source:</strong> Public Archives</p>
    <p><strong>Status:</strong> Unresolved</p>

    <h3>Evidence Summary</h3>

    <p>
     Compilation assembled from newspaper clippings, eyewitness photographs, and anonymous recordings recovered throughout Appalachia. Dates remain disputed. Subject identity does not.
    </p>

    <video controls playsinline preload="metadata"
       poster="grin-rot-footage-thumb.png"
       style="width:100%; border-radius:12px; margin-top:1rem;">
    <source src="recovered-footage-web.mp4" type="video/mp4">
</video>
      <source src="recovered-footage-web.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>

    <h3>Archivist's Note</h3>

    <p><em>The papers disagreed about the dates. They never disagreed about the sightings.</em></p>
  `
  },
 'file-005': {
title: 'CODEX 005: Doktor Rot',
body: `
<p><strong>Classification:</strong> Found Footage</p>
<p><strong>Source:</strong> Anonymous Submission</p>
<p><strong>Status:</strong> Unresolved</p>

<h3>Evidence Summary</h3>

<p>
A short video depicting the entity known as Doktor Rot. The original recording contains no identifiable metadata linking it to a specific location, date, or photographer. No accompanying statement was recovered with the file.
</p>

<video controls playsinline preload="metadata" poster="doktor-rot-thumb.png" style="width:100%; border-radius:12px; margin-top:1rem;">
    <source src="doktor-rot-001.mp4" type="video/mp4">
</video>

<h3>Archivist's Note</h3>

<p><em>Unlike Grin Rot, Doktor Rot never appears to be searching. He behaves as though he already knows exactly where he belongs.</em></p>
`
}, 
 'file-006': {
title: 'CODEX 006: The Laughing Bastard',
body: `
<p><strong>Classification:</strong> Chaotic Entity</p>
<p><strong>Source:</strong> Multiple Witness Accounts</p>
<p><strong>Status:</strong> Active</p>

<h3>Evidence Summary</h3>

<p>
Victims consistently describe uncontrollable laughter moments before the attacks began. The entity appears without warning, remaining completely silent while those around him descend into panic.
</p>
<video controls playsinline preload="metadata"
       poster="grin-rot-footage-thumb.png"
       style="width:100%; border-radius:12px; margin-top:1rem;">
  <source src="recovered-footage-web.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>
<h3>Archivist's Note</h3>

<p><em>He never laughs. That's the part everyone remembers wrong. The laughter always comes from everyone else.</em></p>
`
},
};
const modal=document.getElementById('caseModal');
const content=document.getElementById('caseContent');
document.querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>{const item=cases[btn.dataset.case];content.innerHTML=`<span class="file-stamp">RECOVERED DOCUMENT</span><h3>${item.title}</h3><p>${item.body}</p>`;modal.showModal();}));
document.querySelector('.close-modal')?.addEventListener('click',()=>modal.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close();});
