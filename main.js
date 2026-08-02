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
  'file-001': {
  title: 'The Smile in the Tree Line',
  body: `
<p><strong>Classification:</strong> Appalachian Folklore</p>

<p><strong>Source:</strong> Oral Tradition &amp; Unverified Witness Accounts</p>

<p><strong>Status:</strong> Active</p>

<h3>Evidence Summary</h3>

<p>
For generations, mountain families have repeated the same warning to their children:
</p>

<p><strong>Never walk toward someone smiling from the tree line.</strong></p>

<p>
The figure is always described the same way&mdash;too far away to identify, standing perfectly still, smiling.
</p>

<p>
Adults who investigate usually find nothing.
</p>

<p>
Children, however, are said to describe the stranger in remarkable detail.
</p>

<p>
Several unsolved disappearances throughout the Appalachian Mountains have quietly fueled the legend. One account tells of a young boy who vanished in the Great Smoky Mountains without leaving so much as a footprint. Years later, locals claimed he had spoken about "a smiling man watching from the trees" shortly before he disappeared. Investigators found no evidence linking the story to the case, and many believe the tale was added long after the fact.
</p>

<p>
Whether the legend inspired the rumors, or the rumors kept the legend alive, no one can say.
</p>

<h3>Archivist's Note</h3>

<p><em>
Every mountain has stories about children who wandered too far.
</em></p>

<p><em>
The oldest stories insist they didn't wander alone.
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
 'file-003': {
  title: 'The Laughing Thing',
  body: `
    <p><strong>Classification:</strong> Entity Observation</p>
    <p><strong>Source:</strong> Unknown</p>
    <p><strong>Status:</strong> Active</p>

    <h3>Evidence Summary</h3>

    <p>
      The subject remained motionless before slowly advancing toward the camera.
      No explanation accompanied the recording.
    </p>

    <video
  src="https://grinrot.com/Laughingbastard-1.mp4"
  controls
  playsinline
  preload="auto"
  style="width:100%; border-radius:12px; margin:18px 0;">
</video>

    <h3>Archivist's Note</h3>

    <p><em>
      The recording ended before the subject reached the camera.
      No one has explained why.
    </em></p>
  `
  
},
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
 'doktor-profile': {
  title: 'Doktor Rot',
  body: `
    <p><strong>Classification:</strong> Pestilence Entity</p>
    <p><strong>Status:</strong> Active</p>

    <h3>Biography</h3>

    <p>
      Doktor Rot appears only after the dying is finished. He does not hunt.
      He simply arrives to inspect what remains.
    </p>

    <p>
      Witnesses describe a silent physician carrying rusted instruments that
      never heal. Those who encounter him remember only the smell of decay and
      the feeling that they were examined rather than spared.
    </p>
    <h3>Recovered Evidence</h3>

<div class="gallery">

<a href="doktor-rot-gallery-01.jpg" target="_blank">
<img src="doktor-rot-gallery-01.jpg" alt="Doktor Rot Evidence 01">
</a>

<a href="doktor-rot-gallery-02.jpg" target="_blank">
<img src="doktor-rot-gallery-02.jpg" alt="Doktor Rot Evidence 02">
</a>

<a href="doktor-rot-gallery-03.jpg" target="_blank">
<img src="doktor-rot-gallery-03.jpg" alt="Doktor Rot Evidence 03">
</a>

</div>
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

<video controls playsinline preload="metadata"
       poster="doktor-rot-thumb.png"
       style="width:100%; border-radius:12px; margin-top:1rem;">
  <source src="doktor-rot-001.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>

<h3>Archivist's Note</h3>

<p><em>Unlike Grin Rot, Doktor Rot never appears to be searching. He behaves as though he already knows exactly where he belongs.</em></p>
`
}, 
 'file-006': {
    title: 'The Apostate',
    body: `
<p><strong>Classification:</strong> Fallen Entity</p>
<p><strong>Source:</strong> Confiscated Parish Records</p>
<p><strong>Status:</strong> Excommunicated</p>

<h3>Evidence Summary</h3>

<p>
Ancient church records reference an unnamed believer condemned for an act described only as "the final blasphemy." Every surviving witness claims he never removes the painted face that conceals his own.
</p>

<h3>Archivist's Note</h3>

<p><em>
No document explains his crime. Every document agrees on his sentence.
</em></p>
`
},
 'file-007': {
title: 'The Laughing Bastard',
body: `
<p><strong>Classification:</strong> Chaotic Entity</p>
<p><strong>Source:</strong> Multiple Witness Accounts</p>
<p><strong>Status:</strong> Active</p>

<h3>Evidence Summary</h3>

<p>
Victims consistently describe uncontrollable laughter moments before the attacks began. The entity appears without warning, remaining completely silent while those around him descend into panic.
</p>

<h3>Archivist's Note</h3>

<p><em>He never laughs. That's the part everyone remembers wrong. The laughter always comes from everyone else.</em></p>
`
},
 'file-008': {
  title: 'The Unbound',
  body: `
<p><strong>Classification:</strong> Breach Entity</p>
<p><strong>Source:</strong> Failed Containment Records</p>
<p><strong>Status:</strong> Cannot Be Contained</p>

<h3>Evidence Summary</h3>

<p>
Witnesses describe a masked figure carrying a weapon fashioned from a baseball bat and an industrial saw blade. The stitches around its jaw appear to be restraints rather than repairs. No surviving record identifies who stitched the restraints… or why they failed.
</p>

<h3>Archivist's Note</h3>

<p><em>
The restraints failed first. The weapon came later.
</em></p>
`
},
};
const modal=document.getElementById('caseModal');
const content=document.getElementById('caseContent');
document.querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>{const item=cases[btn.dataset.case];content.innerHTML=`<span class="file-stamp">RECOVERED DOCUMENT</span><h3>${item.title}</h3><p>${item.body}</p>`;modal.showModal();}));

document.querySelector('.close-modal')?.addEventListener('click',()=>modal.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close();});
