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

<p><strong>Status:</strong> Open</p>

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
<p><strong>Source:</strong> Confiscated Church Records</p>
<p><strong>Status:</strong> Excommunicated</p>

<h3>Evidence Summary</h3>
<div class="gallery apostate-gallery">

  <a href="apostate-001.jpg" target="_blank">
    <img src="apostate-001.jpg" alt="The Apostate Evidence 01">
  </a>

  <a href="apostate-002.jpg" target="_blank">
    <img src="apostate-002.jpg" alt="The Apostate Evidence 02">
  </a>

  <a href="apostate-003.jpg" target="_blank">
    <img src="apostate-003.jpg" alt="The Apostate Evidence 03">
  </a>

  <a href="apostate-004.jpg" target="_blank">
    <img src="apostate-004.jpg" alt="The Apostate Evidence 04">
  </a>

  <a href="apostate-005.jpg" target="_blank">
    <img src="apostate-005.jpg" alt="The Apostate Evidence 05">
  </a>

  <a href="apostate-006.jpg" target="_blank">
    <img src="apostate-006.jpg" alt="The Apostate Evidence 06">
  </a>

  <a href="apostate-007.jpg" target="_blank">
    <img src="apostate-007.jpg" alt="The Apostate Evidence 07">
  </a>

  <a href="apostate-008.jpg" target="_blank">
    <img src="apostate-008.jpg" alt="The Apostate Evidence 08">
  </a>

</div>
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
 'file-009': {
  title: 'CODEX 009: The Missing Cabin',
  body: `
<p><strong>Location:</strong> Cades Cove, Tennessee</p>
<p><strong>Classification:</strong> Unresolved Disappearance</p>
<p><strong>Status:</strong> Folkloric / Unverified</p>
<figure class="case-image">
 <img src="missing-cabin.JPG" alt="Historic cabin in Cades Cove photographed beyond a wooden fence" style="width:100%; height:auto; display:block;">
  <figcaption>Cabin along the Cades Cove loop.</figcaption>
</figure>
<h3>Evidence Summary</h3>

<p>
One of the quieter stories told about Cades Cove concerns a church youth group that spent an afternoon riding bicycles through the historic loop.
</p>

<p>
The plan was simple. Stay together, ride the loop, and regroup at one of the old cabins before continuing.
</p>

<p>
One boy pulled ahead of the others.
</p>

<p>
He never found the cabin.
</p>

<p>
Believing he had somehow missed the meeting place, he continued riding until he reached the end of the loop. Certain he had gone too far, he turned around and began retracing the road.
</p>

<p>
He never returned.
</p>

<p>
The youth group waited at the cabin until the afternoon faded into evening. When the boy failed to appear, leaders searched the roads, the fields, and the woods. Rangers joined the effort. Volunteers combed the cove for days.
</p>

<p>
No bicycle was ever recovered.
</p>

<p>
No trace of the boy was ever found.
</p>

<p>
Over the years, the disappearance became something stranger than a missing person case. Locals began to whisper that the cabin had not been missing from the road.
</p>

<p>
It had been missing from his road.
</p>

<p>
Some believe there are places in Cades Cove where the landscape does not always lead to the same destination. A trail, a bridge, or an old cabin may simply fail to appear, and those who continue searching may cross into somewhere that does not belong on any map.
</p>

<p>
Cyclists still tell of hearing the faint click of bicycle spokes drifting through the trees on otherwise silent mornings.
</p>

<p>
The sound circles the loop.
</p>

<p>
It never arrives.
</p>

<h3>Archivist's Note</h3>

<p><em>
If you're certain you've missed the cabin... don't keep riding.
</em></p>
`
},
'file-010': {
  title: 'CODEX 010: The Gifts',
  body: `
    <p><strong>Location:</strong> Southern Appalachia</p>
    <p><strong>Classification:</strong> Regional Folklore</p>
    <p><strong>Status:</strong> Unverified</p>

    <h3>Evidence Summary</h3>

    <p>
      There is an old warning in the mountains about things found where they do not belong.
    </p>

    <p>
      Most people who remember hearing it learned it as children.
    </p>

    <p>
      Never take anything you find near the woods.
    </p>

    <p>
      The reasons changed from family to family. Some said the dead left things behind. Others said taking something that wasn’t yours invited its owner to come looking for it.
    </p>

    <p>
      But when it came to children’s toys, the warning was always simpler.
    </p>

    <p>
      If nobody’s around to give it to you, it isn’t a gift.
    </p>

    <p>
      No one seems to remember where the saying began.
    </p>

    <p>
      Older accounts describe children finding small objects near the edges of farms and along paths leading into the mountains. Wooden animals. Dolls made from cloth. Marbles. Things inexpensive enough that parents assumed another child had simply lost them.
    </p>

    <p>
      Usually, that was probably true.
    </p>

    <p>
      But there were stories about toys appearing in places where no child had been.
    </p>

    <p>
      A doll sitting on a stump deep in the woods.
    </p>

    <p>
      A wooden horse beside an abandoned house.
    </p>

    <p>
      A stuffed animal waiting at the end of a road.
    </p>

    <p>
      Parents noticed something else.
    </p>

    <p>
      The toys were almost always facing away from the woods.
    </p>

    <p>
      Children who found them would stop.
    </p>

    <p>
      They would crouch down.
    </p>

    <p>
      They would pick them up.
    </p>

    <p>
      And for a few seconds, they would have their backs to the trees.
    </p>

    <p>
      Most of the stories end there.
    </p>

    <p>
      The child was called away. A parent came looking. Someone happened to pass by.
    </p>

    <p>
      The toy was left where it was.
    </p>

    <p>
      Not every story ends that way.
    </p>

    <p>
      There are scattered accounts of children disappearing after wandering only a short distance from home. Searchers occasionally found a toy nearby that no one in the family recognized.
    </p>

    <p>
      Authorities treated the objects as unrelated.
    </p>

    <p>
      They probably were.
    </p>

    <p>
      The old warning survived anyway.
    </p>

    <p>
      Over time, the handmade dolls became plastic figures. The wooden animals became stuffed ones. The paths became roads and parking lots.
    </p>

    <p>
      Whatever truth may have existed beneath the superstition should have disappeared with them.
    </p>

    <p>
      Yet children’s toys are still occasionally found sitting alone in strange places.
    </p>

    <p>
      Sometimes miles from the nearest house.
    </p>

    <p>
      Sometimes beside abandoned buildings.
    </p>

    <p>
      Sometimes somewhere a child might notice them.
    </p>

    <p>
      There is never anything unusual about the toys themselves.
    </p>

    <p>
      That was never the warning.
    </p>

    <p>
      The warning was about what might be standing behind you while you picked one up.
    </p>

    <h3>Archivist's Note</h3>

    <p><em>
      If nobody's around to give it to you, it isn't a gift.
    </em></p>
  `
},
 'file-011': {
  title: 'CODEX 011: The Buck',
  body: `
    <p><strong>Location:</strong> Appalachia</p>
    <p><strong>Classification:</strong> Witness Account / Regional Folklore</p>
    <p><strong>Status:</strong> Unverified</p>

    <h3>Evidence Summary</h3>

    <p>
      The hunter had been in the stand since before daylight.
    </p>

    <p>
      By sunrise, the woods had settled around him.
    </p>

    <p>
      Nothing unusual.
    </p>

    <p>
      A few squirrels moving through the leaves. Birds calling farther down the ridge. Once, something small crossed the trail beneath the stand without stopping.
    </p>

    <p>
      Then everything went quiet.
    </p>

    <p>
      He heard the brush move sometime after eight.
    </p>

    <p>
      Not the quick scramble of a rabbit or the careful steps of a doe.
    </p>

    <p>
      Something heavy.
    </p>

    <p>
      It moved slowly through the thicket below him.
    </p>

    <p>
      He raised his rifle and waited.
    </p>

    <p>
      A deer stepped through the brush.
    </p>

    <p>
      A buck.
    </p>

    <p>
      Big.
    </p>

    <p>
      Bigger than anything he had seen on the property before.
    </p>

    <p>
      For several seconds, the hunter simply watched it through the scope.
    </p>

    <p>
      The rack was enormous. The body beneath it was thick through the shoulders and chest. It stood broadside perhaps sixty yards from the stand.
    </p>

    <p>
      It should have been the best deer he had ever seen.
    </p>

    <p>
      Instead, he lowered the rifle.
    </p>

    <p>
      Something wasn’t right.
    </p>

    <p>
      Years later, when asked what he had noticed, the hunter couldn’t explain it.
    </p>

    <p>
      The proportions looked right.
    </p>

    <p>
      The antlers looked right.
    </p>

    <p>
      It moved like a deer.
    </p>

    <p>
      But looking at it produced the same feeling as recognizing someone from a distance and realizing, as they came closer, that you had never seen them before.
    </p>

    <p>
      The buck took another step.
    </p>

    <p>
      The hunter raised the rifle again.
    </p>

    <p>
      He settled the crosshairs behind the shoulder and fired.
    </p>

    <p>
      The shot cracked through the woods.
    </p>

    <p>
      The deer didn’t flinch.
    </p>

    <p>
      It didn’t jump.
    </p>

    <p>
      It didn’t run.
    </p>

    <p>
      It simply stood there.
    </p>

    <p>
      The hunter stared through the scope.
    </p>

    <p>
      He worked the bolt and chambered another round.
    </p>

    <p>
      The deer hadn’t moved.
    </p>

    <p>
      He fired again.
    </p>

    <p>
      Nothing.
    </p>

    <p>
      No stumble.
    </p>

    <p>
      No blood.
    </p>

    <p>
      Not even the twitch of an ear.
    </p>

    <p>
      Then the deer turned its head.
    </p>

    <p>
      Not quickly.
    </p>

    <p>
      Slowly.
    </p>

    <p>
      Until it was looking directly up at the stand.
    </p>

    <p>
      The hunter later insisted that this was the moment he became afraid.
    </p>

    <p>
      Not when the first bullet appeared to miss.
    </p>

    <p>
      Not when the second one did.
    </p>

    <p>
      When it looked at him.
    </p>

    <p>
      The two remained that way for several seconds.
    </p>

    <p>
      Neither moved.
    </p>

    <p>
      Then the deer turned its head back toward the trees.
    </p>

    <p>
      It walked across the clearing.
    </p>

    <p>
      Slowly.
    </p>

    <p>
      Without urgency.
    </p>

    <p>
      It disappeared into the brush.
    </p>

    <p>
      The hunter remained in the stand for nearly an hour before climbing down.
    </p>

    <p>
      He found where the animal had been standing.
    </p>

    <p>
      He found both places where his bullets had struck the earth beyond it.
    </p>

    <p>
      He found tracks leading into the clearing.
    </p>

    <p>
      He found tracks leaving it.
    </p>

    <p>
      There was no blood.
    </p>

    <p>
      No hair.
    </p>

    <p>
      Nothing indicating that either bullet had touched the animal.
    </p>

    <p>
      He never hunted that stand again.
    </p>

    <p>
      The story would be largely forgotten until decades later, when similar accounts began circulating throughout Appalachia.
    </p>

    <p>
      The descriptions vary.
    </p>

    <p>
      Too tall.
    </p>

    <p>
      Too thin.
    </p>

    <p>
      Legs that seem slightly too long.
    </p>

    <p>
      Eyes that don’t look where a deer’s eyes should.
    </p>

    <p>
      Some witnesses describe animals that walk strangely.
    </p>

    <p>
      Others describe nothing unusual at all.
    </p>

    <p>
      Only the certainty that what they were looking at was wrong.
    </p>

    <p>
      Today, those stories have a name.
    </p>

    <p>
      Not Deer.
    </p>

    <p>
      The name is new.
    </p>

    <p>
      The feeling isn’t.
    </p>

    <h3>Archivist's Note</h3>

    <p><em>
      Some things look exactly like what they are supposed to be.
    </em></p>
  `
}
};
const modal=document.getElementById('caseModal');
const content=document.getElementById('caseContent');
document.querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>{const item=cases[btn.dataset.case];content.innerHTML=`<span class="file-stamp">RECOVERED DOCUMENT</span><h3>${item.title}</h3><p>${item.body}</p>`;modal.showModal();}));

document.querySelector('.close-modal')?.addEventListener('click',()=>modal.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close();});
