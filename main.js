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
},
'file-012': {
  title: 'CODEX 012: The Last Ride',
  body: `
    <p><strong>Location:</strong> Abandoned Amusement Park</p>
    <p><strong>Classification:</strong> Local Folklore / Apparition</p>
    <p><strong>Status:</strong> Unverified</p>

    <h3>Evidence Summary</h3>

    <p>
      The abandoned amusement park is easy enough to find.
    </p>

    <p>
      The tunnel is harder.
    </p>

    <p>
      A steep trail climbs the hillside beneath the old chairlift. Rusted chairs still hang overhead, disappearing into the trees as if the ride never truly ended.
    </p>

    <p>
      People who have made the climb often remember the same thing.
    </p>

    <p>
      The laughter.
    </p>

    <p>
      Not loud enough to echo.
    </p>

    <p>
      Not close enough to follow.
    </p>

    <p>
      Just somewhere above them.
    </p>

    <p>
      Most keep walking.
    </p>

    <p>
      The tunnel waits at the top of the hill, its entrance swallowing the daylight. By then the laughter has usually stopped.
    </p>

    <p>
      That is when people begin looking over their shoulder.
    </p>

    <p>
      Some claim they saw someone standing among the empty chairs.
    </p>

    <p>
      Others insist the figure was waiting beyond the mouth of the tunnel.
    </p>

    <p>
      No two accounts agree.
    </p>

    <p>
      Only one detail is repeated often enough to matter.
    </p>

    <p>
      The smile.
    </p>

    <p>
      No investigation has ever confirmed the stories.
    </p>

    <p>
      No recording has captured the laughter.
    </p>

    <p>
      Even so, locals still repeat the same advice.
    </p>

    <p>
      If you hear someone laughing above the trail…
    </p>

    <p>
      …don’t stop to find out where it’s coming from.
    </p>

    <h3>Archivist's Note</h3>

    <p><em>
      The ride has been closed for years.
    </em></p>
  `
},
'file-013': {
  title: 'CODEX 013: The Ones Who Would Not See the Sun',
  body: `
    <p><strong>Location:</strong> Tennessee–North Carolina Border</p>
    <p><strong>Classification:</strong> Regional Folklore / Historical Account</p>
    <p><strong>Status:</strong> Unverified</p>

    <h3>Evidence Summary</h3>

    <p>
      Long before settlers crossed the mountains, Cherokee stories spoke of a strange people already living among the ridges.
    </p>

    <p>
      They were said to have pale skin and enormous eyes that could not bear the daylight. They emerged only beneath the moon, slipping between caves and forests before the first hint of dawn.
    </p>

    <p>
      Most historians dismiss the tale as folklore.
    </p>

    <p>
      The archive does not.
    </p>

    <p>
      In the spring of 1934, three Civilian Conservation Corps workers were mapping a newly discovered cave near the Tennessee–North Carolina border. According to the surviving field notes, the men found evidence that someone had been living deep inside the mountain.
    </p>

    <p>
      Not recently.
    </p>

    <p>
      Continuously.
    </p>

    <p>
      Beds of woven moss. Clay bowls blackened by old fires. Children’s footprints preserved in damp earth.
    </p>

    <p>
      The notes ended abruptly.
    </p>

    <p>
      “Eyes reflecting deeper in the passage. Too many to count.”
    </p>

    <p>
      The remaining pages were never recovered.
    </p>

    <p>
      The cave was later sealed after a collapse.
    </p>

    <p>
      No official record mentions the missing notebook.
    </p>

    <p>
      No excavation was ever completed.
    </p>

    <p>
      Every few years, hikers still report pale faces watching from cave entrances after sunset. By the time anyone looks a second time, they’re gone.
    </p>

    <p>
      Wildlife experts blame shadows.
    </p>

    <p>
      Others blame imagination.
    </p>

    <p>
      No explanation has ever accounted for the footprints.
    </p>

    <p>
      Always barefoot.
    </p>

    <p>
      Always small.
    </p>

    <p>
      Always leading farther into the mountain.
    </p>

    <h3>Archivist's Note</h3>

    <p>
      The oldest stories insist the Moon-Eyed People disappeared centuries ago.
    </p>

    <p>
      The newest reports suggest they simply stopped coming out.
    </p>
  `
},
 'file-014': {
  title: 'CODEX 014: Laughter',
  body: `
    <p><strong>Location:</strong> Unknown</p>
    <p><strong>Classification:</strong> Recovered Audio</p>
    <p><strong>Status:</strong> Unresolved</p>

    <h3>Recovered Recording</h3>

    <audio controls style="width:100%; margin-top:1rem;">
      <source src="Recovered%20laughter.mp3" type="audio/mpeg">
      Your browser does not support audio playback.
    </audio>
  `
},
 'file-015': {
  title: 'CODEX 015: Insomnia',
  body: `
    <p><strong>Location:</strong> Unknown</p>
    <p><strong>Classification:</strong> Recovered Personal Account</p>
    <p><strong>Status:</strong> Unresolved</p>

    <h3>Evidence Summary</h3>

    <p>I haven't slept in nine days.</p>

    <p>Not slept badly.</p>

    <p>Nothing.</p>

    <p>I've closed my eyes. I've taken sleeping pills. I've lain in bed until morning staring at the ceiling.</p>

    <p>Nothing works.</p>

    <p>By the third day, things started moving at the edges of my vision.</p>

    <p>By the fourth, I heard people talking in empty rooms.</p>

    <p>Sleep deprivation causes hallucinations.</p>

    <p>Knowing that helps.</p>

    <p>A little.</p>

    <p>On the fifth night, I heard someone breathing beneath my bed.</p>

    <p>I didn't look.</p>

    <p>That's another thing I've learned.</p>

    <p>Don't investigate anything you see or hear after midnight.</p>

    <p>The coat hanging on the door is a coat.</p>

    <p>The whisper from the hallway is the refrigerator.</p>

    <p>Then the whispers started.</p>

    <p>Every time I got close to sleep, I'd hear them.</p>

    <p>Too faint to understand.</p>

    <p>Not quite a voice. More like someone speaking from the next room with the door closed.</p>

    <p>My eyes would open.</p>

    <p>Silence.</p>

    <p>I'd start drifting again.</p>

    <p>The whispering would return.</p>

    <p>After a while, I stopped trying to understand what it was saying.</p>

    <p>I was afraid eventually I would.</p>

    <p>The doctors tried different medications.</p>

    <p>Nothing.</p>

    <p>One told me to go to the hospital.</p>

    <p>I didn't.</p>

    <p>After nine days without sleep, you'll try things you once considered stupid.</p>

    <p>That's how I ended up with the chloroform.</p>

    <p>An old bottle. Probably dangerous.</p>

    <p>I didn't care.</p>

    <p>I just wanted to sleep.</p>

    <p>I put the prescriptions, the bottle, a flashlight, and my phone on the table.</p>

    <p>Then I started recording.</p>

    <p>Just in case.</p>

    <p>I soaked a cloth.</p>

    <p>Lay down.</p>

    <p>Breathed.</p>

    <p>And for the first time in nine days&mdash;</p>

    <p>nothing.</p>

    <p>I woke to sunlight.</p>

    <p>Eleven hours had passed.</p>

    <p>I actually cried.</p>

    <p>Then I remembered the recording.</p>

    <p>For the first six hours, nothing happened.</p>

    <p>I was unconscious somewhere outside the camera's view.</p>

    <p>Then I heard it.</p>

    <p>Whispering.</p>

    <p>Faint at first.</p>

    <p>I turned the volume up.</p>

    <p>It wasn't coming from me.</p>

    <p>I almost stopped watching.</p>

    <p>Then my sleeping voice answered it.</p>

    <p>Twenty minutes before I woke, I walked into frame.</p>

    <p>I don't remember doing it.</p>

    <p>I placed a folded piece of paper beside the chloroform bottle and walked away.</p>

    <p>The paper was still there.</p>

    <p>Four words.</p>

    <p>My handwriting.</p>

    <p><strong>YOU WEREN'T SUPPOSED TO SLEEP.</strong></p>
  `
},
 'file-016': {
  title: 'CODEX 016: The Light',
  body: `
    <p><strong>Location:</strong> East Tennessee</p>
    <p><strong>Classification:</strong> Witness Account / Recurring Phenomenon</p>
    <p><strong>Status:</strong> Unresolved</p>

    <h3>Evidence Summary</h3>

    <p>When I was a kid, a few of us waited for the school bus in front of a house at the bottom of a hill.</p>

    <p>One morning, while it was still dark, I saw a light come from behind the house.</p>

    <p>It moved beside the house, passed in front of us, crossed the road, traveled through the field, crossed another road&mdash;</p>

    <p>and disappeared.</p>

    <p>I asked the others if they'd seen it.</p>

    <p>Nobody had.</p>

    <p>That evening I told my mother.</p>

    <p>She went quiet.</p>

    <p>Then she told me to tell my stepfather exactly what I'd told her.</p>

    <p>So I did.</p>

    <p>He listened without interrupting.</p>

    <p>When I finished, he told me that when he was a kid, he'd waited for the bus in the same place.</p>

    <p>And one morning he'd seen the light too.</p>

    <p>Same path.</p>

    <p>Same field.</p>

    <p>Same direction.</p>

    <p>And just like me, he'd been standing with other kids.</p>

    <p>Nobody else saw it.</p>

    <p>We never really talked about it again.</p>

    <p>Years passed.</p>

    <p>The house changed. The road changed. Most of the people who lived there moved away.</p>

    <p>But I've never forgotten the light.</p>

    <p>Especially something my stepfather said before the conversation ended.</p>

    <p>I didn't understand why it bothered my mother so much at the time.</p>

    <p>I do now.</p>

    <p>Before him, someone else in his family had seen it.</p>

    <p>Same place.</p>

    <p>Same age.</p>

    <p>Nobody else could see it.</p>

    <p>I asked him what he thought it was.</p>

    <p>He said he didn't know.</p>

    <p>Then my mother asked the question neither of us had thought to ask.</p>

    <p>"Did it go the same direction both times?"</p>

    <p>It had.</p>

    <p>She looked toward the window.</p>

    <p>Then she said:</p>

    <p><strong>"Then it still hasn't found what it's looking for."</strong></p>
  `
},
 'file-017': {
  title: 'CODEX 017: The Stranger',
  body: `
    <p><strong>Location:</strong> Lake City, Tennessee</p>
    <p><strong>Classification:</strong> Witness Account / Unidentified Stranger</p>
    <p><strong>Status:</strong> Unresolved</p>

    <h3>Evidence Summary</h3>

    <p>When his daughter was a toddler, he made a trip to Kentucky and back.</p>

    <p>He was exhausted.</p>

    <p>To stay awake, he took caffeine pills.</p>

    <p>A lot of them.</p>

    <p>And washed them down with six Mountain Dews.</p>

    <p>Somewhere around Lake City on the way home, something went wrong.</p>

    <p>His heart was racing.</p>

    <p>He couldn't breathe.</p>

    <p>He was convinced he was dying.</p>

    <p>He pulled off the road.</p>

    <p>His daughter stayed in the car while he got out and wandered around nearby, panicking and trying to figure out what to do.</p>

    <p>That's when the van pulled up.</p>

    <p>The driver had long, greasy hair. The stranger looked rough enough that under different circumstances he probably wouldn't have wanted him stopping.</p>

    <p>The stranger asked what was wrong.</p>

    <p>He told him he was freaking out.</p>

    <p>That he thought he was dying.</p>

    <p>The stranger listened.</p>

    <p>Then got back into his van and drove away.</p>

    <p>He managed to call his ex-wife.</p>

    <p>She and his father were already on their way to find them, but he was disoriented and couldn't explain exactly where he was.</p>

    <p>While searching, they stopped at a gas station.</p>

    <p>A man approached his ex-wife.</p>

    <p>Long, greasy hair.</p>

    <p>He asked her one question.</p>

    <p>"Are you her?"</p>

    <p>She said yes.</p>

    <p>Then he told her:</p>

    <p>"They are okay.</p>

    <p>But he is in trouble."</p>

    <p>They found them.</p>

    <p>He ended up in the hospital.</p>

    <p>He'd overdosed on caffeine.</p>

    <p>He came very close to dying.</p>

    <p>His daughter was okay.</p>

    <p>So was he, eventually.</p>

    <p>But there's one part of that night he's never been able to explain.</p>

    <p>He never told the stranger his daughter's name.</p>

    <p>He never told the stranger his ex-wife's name.</p>

    <p>He never even told the stranger his own.</p>

    <p>He didn't know what she looked like.</p>

    <p>He didn't know where she would stop.</p>

    <p>But somehow, in another place along that road, he walked directly up to her and asked:</p>

    <p>"Are you her?"</p>

    <p>He doesn't know who the stranger was.</p>

    <p>He doesn't know how he found her.</p>

    <p>He doesn't know how he knew who she was looking for.</p>

    <p>He only knows that the stranger stopped when he needed someone to stop.</p>

    <p>And somehow, he found the people who needed to find him.</p>

    <p>He never saw the stranger again.</p>

    <p><em>&mdash;Names redacted</em></p>
  `
},
 'file-018': {
  title: 'CODEX 018: The Angel',
  body: `
    <p><strong>Location:</strong> East Knoxville, Tennessee</p>
    <p><strong>Classification:</strong> Witness Account / Suspected Haunted Object</p>
    <p><strong>Status:</strong> Inactive After Removal</p>

    <h3>Evidence Summary</h3>

    <p>They lived in a small cottage in East Knoxville.</p>

    <p>One weekend, his wife came home from a yard sale with a handmade primitive angel.</p>

    <p>It was the kind of thing someone had made by hand. Rough. Simple. Old-looking.</p>

    <p>She liked it.</p>

    <p>So they kept it.</p>

    <p>A few days later, he was in the bathroom when he saw his wife walk past the open door.</p>

    <p>There was nothing strange about it.</p>

    <p>He saw her pass by and called out to her.</p>

    <p>She didn't answer.</p>

    <p>He finished brushing his teeth and walked out to see where she'd gone.</p>

    <p>He turned left.</p>

    <p>She wasn't there.</p>

    <p>So he went the other way, back toward the kitchen.</p>

    <p>She was standing there.</p>

    <p>He asked if she'd just walked past the bathroom.</p>

    <p>She hadn't.</p>

    <p>She hadn't even been back there.</p>

    <p>He knew what he'd seen.</p>

    <p>It looked like her.</p>

    <p>Not a shadow.</p>

    <p>Not something at the edge of his vision.</p>

    <p>Her.</p>

    <p>After that, his wife started noticing things too.</p>

    <p>Shapes.</p>

    <p>Movement.</p>

    <p>Something passing through a room when nobody should have been there.</p>

    <p>Nothing dramatic ever happened.</p>

    <p>Nothing spoke to them.</p>

    <p>Nothing attacked them.</p>

    <p>They just kept seeing things that weren't supposed to be there.</p>

    <p>And it had all started shortly after the angel came home.</p>

    <p>Eventually, his wife got rid of it.</p>

    <p>They never tried to find out where it came from.</p>

    <p>They never tried to learn who made it.</p>

    <p>They didn't investigate its history.</p>

    <p>They just wanted it gone.</p>

    <p>After that, the cottage became quiet again.</p>

    <p>No more shapes.</p>

    <p>No more movement.</p>

    <p>And he never saw his wife walk past a doorway while she was somewhere else in the house.</p>

    <p>Maybe the timing was coincidence.</p>

    <p>Maybe there was never anything strange about the angel at all.</p>

    <p>He doesn't know.</p>

    <p>He's occasionally wondered where it ended up.</p>

    <p>But never wondered enough to go looking for it.</p>
  `
}
, 'file-019': {
  title: 'CODEX 019: The Walk Down the Holler',
  body: `
    <p><strong>Location:</strong> East Tennessee</p>
    <p><strong>Classification:</strong> Witness Account / Unidentified Presence</p>
    <p><strong>Status:</strong> Unresolved</p>

    <h3>Evidence Summary</h3>

    <p>When I was a kid, I walked down the holler alone every morning to catch the school bus.</p>

    <p>Most mornings it was still dark.</p>

    <p>That was when something began following me.</p>

    <p>I never saw it. I only heard branches breaking and footsteps pushing through the dead leaves inside the tree line. If I walked faster, it kept pace. If I slowed down, it slowed with me.</p>

    <p>My father said it was probably a bobcat.</p>

    <p>I accepted that because the alternative was walking the same road each morning believing something wanted me.</p>

    <p>It never came onto the road. It never growled or called out. It simply followed until I reached the place where the other children waited.</p>

    <p>Then the woods went quiet.</p>

    <p>This happened for months. Eventually it stopped, and I grew up without ever learning what it was.</p>

    <p>Last year, I returned home for a funeral and ran into one of the girls who had waited for the bus with me. We talked about the old road and how frightened I had been of the animal in the woods.</p>

    <p>She stopped smiling.</p>

    <p>&ldquo;That wasn&rsquo;t an animal,&rdquo; she said.</p>

    <p>I asked how she knew.</p>

    <p>&ldquo;Because we could see him after you reached us.&rdquo;</p>

    <p>I reminded her that the sound always stopped.</p>

    <p>&ldquo;He stopped walking,&rdquo; she said. &ldquo;He didn&rsquo;t leave.&rdquo;</p>

    <p>She told me a man would stand between the trees and watch us until the bus carried me away. None of the children mentioned him because they assumed I knew who he was.</p>

    <p>&ldquo;We thought he was your father,&rdquo; she said. &ldquo;Until I saw you today.&rdquo;</p>

    <p>She stared at my face for a long time.</p>

    <p><strong>&ldquo;You finally grew into him.&rdquo;</strong></p>
  `
  }

};
const modal=document.getElementById('caseModal');
const content=document.getElementById('caseContent');
document.querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>{const item=cases[btn.dataset.case];content.innerHTML=`<span class="file-stamp">RECOVERED DOCUMENT</span><h3>${item.title}</h3><p>${item.body}</p>`;modal.showModal();}));

document.querySelector('.close-modal')?.addEventListener('click',()=>modal.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close();});
