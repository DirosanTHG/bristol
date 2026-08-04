const places = [
  {n:"Ashton Court Estate — Fiesta Site", cat:"fiesta", lat:51.4437384, lng:-2.6381437, note:"This is it — where the actual Balloon Fiesta happens. Free entry, no tickets needed.", url:"https://www.google.com/maps/place/?q=place_id:ChIJb2CBVquNcUgRo4FMeF8eZAU"},
  {n:"Bristol Temple Meads Station", cat:"station", lat:51.4497104, lng:-2.5806191, note:"Where your train arrives Saturday and departs Sunday. Shuttle bus to the Fiesta also leaves from here.", url:"https://www.google.com/maps/place/?q=place_id:ChIJQ3WFcgCPcUgRugWR02CH5bA"},
  {n:"Travelodge Bristol Central Mitchell Lane", cat:"hotel", lat:51.4508112, lng:-2.5880765, note:"Your hotel — anchor point for distances.", url:"https://maps.google.com/?cid=743774322461684919"},

  // FREE
  {n:"Bristol Museum & Art Gallery", cat:"free", lat:51.4564954, lng:-2.6050953, note:"Free entry, closed Mondays. Includes a Banksy piece.", url:"https://maps.google.com/?cid=4458557562126287934"},
  {n:"M Shed", cat:"free", lat:51.4476479, lng:-2.5982375, note:"Free dockside museum on Bristol's history.", url:"https://maps.google.com/?cid=8538575726894730822"},
  {n:"The Georgian House Museum", cat:"free", lat:51.4538655, lng:-2.6033076, note:"Free, open Thu–Sun 11am–4pm only.", url:"https://maps.google.com/?cid=17065518502847147358"},
  {n:"Blaise Museum", cat:"free", lat:51.505778, lng:-2.63246, note:"Free, but ~5 miles north — separate trip, not walkable with the rest.", url:"https://maps.google.com/?cid=2438970746493625602"},
  {n:"The Red Lodge Museum", cat:"free", lat:51.4553629, lng:-2.5997336, note:"Free, open Thu–Sun 11am–4pm only.", url:"https://maps.google.com/?cid=14284117167024965305"},
  {n:"Palestine Museum & Cultural Centre", cat:"free", lat:51.4556886, lng:-2.5947703, note:"Free, open Sat–Sun 11am–6pm — perfect for your dates.", url:"https://maps.google.com/?cid=12085649832069372630"},
  {n:"Arnolfini Arts", cat:"free", lat:51.4493123, lng:-2.5973741, note:"Free gallery entry, some events ticketed.", url:"https://maps.google.com/?cid=6845675639895249327"},
  {n:"Underfall Yard", cat:"free", lat:51.4468894, lng:-2.6180007, note:"Free visitor centre, working historic boatyard.", url:"https://maps.google.com/?cid=8837650502366412831"},
  {n:"Cabot Tower & Brandon Hill", cat:"free", lat:51.4540263, lng:-2.6068101, note:"Free — best panoramic view over the whole city.", url:"https://maps.google.com/?cid=2282874465101762944"},
  {n:"Clifton Suspension Bridge", cat:"free", lat:51.4549089, lng:-2.6278553, note:"Free to walk across, plus a free Visitor Centre by the bridge.", url:"https://maps.google.com/?cid=17118571217094634702"},
  {n:"Bristol Cathedral", cat:"free", lat:51.4516518, lng:-2.6006447, note:"Free, donations welcome. Shorter hours on Sunday.", url:"https://maps.google.com/?cid=1946930996653712780"},
  {n:"St Mary Redcliffe Church", cat:"free", lat:51.4483337, lng:-2.5895223, note:"Free, stunning Gothic architecture.", url:"https://maps.google.com/?cid=9401261546173552576"},
  {n:"Pero's Bridge", cat:"free", lat:51.4501036, lng:-2.5979384, note:"Free — on your Saturday walking route to the Fiesta.", url:"https://maps.google.com/?cid=12334067635226986228"},
  {n:"Statue of Cary Grant", cat:"free", lat:51.4498426, lng:-2.6009106, note:"Free quick photo stop on the Harbourside.", url:"https://maps.google.com/?cid=13436932856507980985"},
  {n:"Banksy Walk Bristol", cat:"free", lat:51.4555704, lng:-2.6064919, note:"Free self-guided street art spot near Berkeley Square.", url:"https://maps.google.com/?cid=14919491036703569586"},
  {n:"Castle Park", cat:"free", lat:51.4558253, lng:-2.5880581, note:"Free riverside park with church ruins.", url:"https://maps.google.com/?cid=15615145335287111975"},
  {n:"Millennium Square", cat:"free", lat:51.449795, lng:-2.6004516, note:"Free public square, fountains and sculptures.", url:"https://maps.google.com/?cid=727230243578170860"},
  {n:"Queen Square", cat:"free", lat:51.4511825, lng:-2.594571, note:"Free elegant Regency square with lawns.", url:"https://maps.google.com/?cid=1054754534944787718"},
  {n:"The Centre", cat:"free", lat:51.4532218, lng:-2.5974609, note:"Free riverside concourse, food stalls nearby.", url:"https://maps.google.com/?cid=5889288656463484825"},
  {n:"Round Pool", cat:"free", lat:51.455569, lng:-2.5890358, note:"Free small water feature, part of Castle Park area.", url:"https://maps.google.com/?cid=11099603669790705864"},
  {n:"Clifton Down", cat:"free", lat:51.461429, lng:-2.6250424, note:"Free rolling green downs with river views.", url:"https://maps.google.com/?cid=6554923641144562287"},
  {n:"Dame Emily Park", cat:"free", lat:51.4426272, lng:-2.6015513, note:"Free park in Southville, playground and skate park.", url:"https://maps.google.com/?cid=3034929056123253360"},
  {n:"The Bearpit", cat:"free", lat:51.45946, lng:-2.5907347, note:"Free central underpass plaza, arts and markets.", url:"https://maps.google.com/?cid=16346398314872875665"},
  {n:"Windmill Hill City Farm", cat:"free", lat:51.4424552, lng:-2.5932025, note:"Free city farm in Bedminster.", url:"https://maps.google.com/?cid=248881932638884399"},
  {n:"Lloyds Amphitheatre", cat:"free", lat:51.4484707, lng:-2.5996293, note:"Free harbourside amphitheatre space.", url:"https://maps.google.com/?cid=15512874554198834116"},

  // PAID
  {n:"Brunel's SS Great Britain", cat:"paid", lat:51.4491712, lng:-2.6084058, note:"~£20pp — Bristol's top attraction, includes Being Brunel.", url:"https://maps.google.com/?cid=1584297925753515299"},
  {n:"Bristol Aquarium", cat:"paid", lat:51.4507466, lng:-2.5990346, note:"~£22.50pp — underwater tunnels, sharks, touch pools.", url:"https://maps.google.com/?cid=16282619830663905259"},
  {n:"We The Curious", cat:"paid", lat:51.4504841, lng:-2.6001037, note:"Science centre + UK's only 3D planetarium.", url:"https://maps.google.com/?cid=15333687718761788150"},
  {n:"Wake The Tiger", cat:"paid", lat:51.445601, lng:-2.5662171, note:"Immersive art experience, further east.", url:"https://maps.google.com/?cid=6114971640859421568"},
  {n:"Upside Down House", cat:"paid", lat:51.4503936, lng:-2.5993263, note:"~£6.95pp novelty photo attraction.", url:"https://maps.google.com/?cid=3295278658152682633"},
  {n:"The Bristol Wheel", cat:"paid", lat:51.4503656, lng:-2.5994528, note:"Ferris wheel at Millennium Square, paid per ride.", url:"https://maps.google.com/?cid=12359167585956040336"},
  {n:"Bristol Packet Boat Trips", cat:"paid", lat:51.448383, lng:-2.606281, note:"Harbour boat tours, various lengths.", url:"https://maps.google.com/?cid=13336684773859365993"},
  {n:"The Matthew of Bristol", cat:"paid", lat:51.447548, lng:-2.5992892, note:"Free viewing, donations relied on — closed Mondays.", url:"https://maps.google.com/?cid=13284405000300986100"},
  {n:"Cross-Harbour Ferry", cat:"paid", lat:51.4489545, lng:-2.6069902, note:"Cheap (~£1.30) — handy shortcut across the harbour.", url:"https://maps.google.com/?cid=13749044694653007733"},
  {n:"Bristol Ghost Tours", cat:"paid", lat:51.4514856, lng:-2.600234, note:"Guided tour, meets at the Cathedral.", url:"https://maps.google.com/?cid=16469103423170000318"},
  {n:"Clue HQ Escape Game", cat:"paid", lat:51.4571909, lng:-2.5924745, note:"Escape room experience.", url:"https://maps.google.com/?cid=9720961168437277112"},
  {n:"Locked In A Room Bristol", cat:"paid", lat:51.4497115, lng:-2.6012796, note:"Escape room, Harbourside location.", url:"https://maps.google.com/?cid=7439621603867700407"},
  {n:"Hell In A Cell Escape Rooms", cat:"paid", lat:51.4422342, lng:-2.5963805, note:"Escape room, Bedminster.", url:"https://maps.google.com/?cid=1870448953732730909"},
  {n:"Escape Hunt Bristol", cat:"paid", lat:51.4582552, lng:-2.5856039, note:"Escape room, Cabot Circus.", url:"https://maps.google.com/?cid=4530710530348132217"},
  {n:"Lane7 Bristol", cat:"paid", lat:51.4498009, lng:-2.6019825, note:"Bowling, darts, arcade games.", url:"https://maps.google.com/?cid=10008819465084058501"},

  // BUBBLE TEA
  {n:"Chatime", cat:"boba", lat:51.4576288, lng:-2.5916492, note:"Bubble tea — central on Union St, Broadmead.", url:"https://www.google.com/maps/place/?q=place_id:ChIJccJqDSiPcUgRB-TwFWWV_fc"},
  {n:"Bubbleology", cat:"boba", lat:51.4587581, lng:-2.5854291, note:"Bubble tea — highest rated of the cluster (4.7\u2605), Broadmead.", url:"https://www.google.com/maps/place/?q=place_id:ChIJF15vH9GPcUgRqUJvBwl0pCs"},
  {n:"Papawcha Bristol & Mahjong Club", cat:"boba", lat:51.4578478, lng:-2.5902127, note:"Bubble tea — also has a mahjong club to sit and play, 4.7\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJ9SKOexqPcUgRW4yjw2W4Wjw"},
  {n:"Gong Cha", cat:"boba", lat:51.4573216, lng:-2.5885628, note:"Bubble tea — international chain, spacious, self-order screens.", url:"https://www.google.com/maps/place/?q=place_id:ChIJgfYlFS-PcUgRTgz2Wg78pSQ"},
  {n:"CUPP Cabot Circus", cat:"boba", lat:51.4576744, lng:-2.5865693, note:"Coffee, matcha and boba combo, Broadmead.", url:"https://www.google.com/maps/place/?q=place_id:ChIJn4O3_HCOcUgRwNcOqMoc23k"},
  {n:"Chahalo\u8336\u8bdd\u5f04 - Bristol", cat:"boba", lat:51.4553087, lng:-2.6005284, note:"Bubble tea — authentic Chinese-style tea, no creamer/mass-produced ingredients, 4.7\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJnf45vyiNcUgRMjX0byYnuEU"},
  {n:"Cha & Chill", cat:"boba", lat:51.4473229, lng:-2.5986136, note:"Bubble tea — family-run, Thai milk teas made with real leaves, Wapping Wharf, 4.9\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJjwrjQPiNcUgRSU54M_Eelwg"},
  {n:"Kumomo", cat:"boba", lat:51.4554297, lng:-2.6185724, note:"Matcha specialist — widely called the best matcha in Bristol, Clifton, 4.9\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJ-0iMHd6NcUgRbvFeAVONJBE"},
  {n:"Jo's Tea Queen's Road", cat:"boba", lat:51.4563332, lng:-2.6066872, note:"Bubble tea — Bristol-born, extensive menu with seasonal specials, Clifton, 4.4\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJV1XhuYKNcUgRQkBO9C9-Ark"},

  // CHECK FIRST
  {n:"Redcliffe Caves", cat:"check", lat:51.4484039, lng:-2.5922811, note:"Normally closed — only opens for tours/special events.", url:"https://maps.google.com/?cid=11303468765335463586"},
  {n:"Goldney Grotto", cat:"check", lat:51.4519306, lng:-2.6136749, note:"Pre-booked tours only, not a walk-up spot.", url:"https://maps.google.com/?cid=1567860524147698617"},
  {n:"Bristol Harbour Railway", cat:"check", lat:51.4480656, lng:-2.5969843, note:"Runs selected weekends only — check mshed.org first.", url:"https://maps.google.com/?cid=5920646282651720005"},
];

const catIcon = {
  free:"✓",
  paid:"£",
  check:"!",
  hotel:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="6" rx="1.5"/><path d="M3 17v3"/><path d="M21 17v3"/><path d="M5 11V6.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V11"/></svg>',
  fiesta:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 6 6 6 10c0 3.5 2.3 5.8 4 6.6V18h4v-1.4c1.7-.8 4-3.1 4-6.6 0-4-2-8-6-8z"/><line x1="9" y1="16" x2="7.5" y2="19"/><line x1="15" y1="16" x2="16.5" y2="19"/><rect x="9.5" y="19" width="5" height="3" rx="0.5"/></svg>',
  station:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="12" rx="3"/><line x1="5" y1="10" x2="19" y2="10"/><circle cx="8.5" cy="18.5" r="1.3" fill="white" stroke="none"/><circle cx="15.5" cy="18.5" r="1.3" fill="white" stroke="none"/><line x1="7" y1="16" x2="5" y2="19"/><line x1="17" y1="16" x2="19" y2="19"/></svg>',
  boba:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="7"/><line x1="10" y1="2" x2="14" y2="2"/><path d="M7 7h10l-1.3 12.3a2 2 0 0 1-2 1.7h-3.4a2 2 0 0 1-2-1.7L7 7z"/><circle cx="9.7" cy="14" r="0.9" fill="white" stroke="none"/><circle cx="12.3" cy="16.3" r="0.9" fill="white" stroke="none"/><circle cx="14.6" cy="13.5" r="0.9" fill="white" stroke="none"/></svg>'
};

function makeIcon(cat){
  const big = cat==="hotel" || cat==="fiesta" || cat==="station";
  return L.divIcon({
    className:"",
    html:`<div class="custom-pin ${cat}">${catIcon[cat]}</div>`,
    iconSize: big ? [32,32] : [26,26],
    iconAnchor: big ? [16,16] : [13,13],
    popupAnchor: [0,-14]
  });
}

const map = L.map('map', { zoomControl:true }).setView([51.4508, -2.596], 14);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

const groups = { free:[], paid:[], check:[], hotel:[], fiesta:[], station:[], boba:[] };
const badgeLabel = { free:"Free", paid:"Paid", check:"Double-check", hotel:"Your hotel", fiesta:"Fiesta site", station:"Train station", boba:"Bubble tea" };

places.forEach(p=>{
  const marker = L.marker([p.lat, p.lng], { icon: makeIcon(p.cat) });
  marker.bindPopup(
    `<p class="pop-name">${p.n}</p>
     <span class="pop-badge ${p.cat}">${badgeLabel[p.cat]}</span>
     <p class="pop-note">${p.note}</p>
     <a class="pop-link" href="${p.url}" target="_blank" rel="noopener">Open in Google Maps →</a>`
  );
  groups[p.cat].push(marker);
  marker.addTo(map);
});

const layerGroups = {};
Object.keys(groups).forEach(cat=>{
  layerGroups[cat] = L.layerGroup(groups[cat]);
});

const ALWAYS_ON = ['hotel','fiesta','station'];

const legendLabel = {
  free:"Free entry", paid:"Paid attraction", boba:"Bubble tea",
  check:"Double-check first", fiesta:"Fiesta site", station:"Train station", hotel:"Your hotel"
};
const legendOrder = ['free','paid','boba','check','fiesta','station','hotel'];

const legendList = document.getElementById('legendList');
legendList.innerHTML = legendOrder.map(cat =>
  `<div class="legend-row">
     <span class="legend-pin ${cat}">${catIcon[cat]}</span>
     ${legendLabel[cat]}
   </div>`
).join('');

const pills = document.querySelectorAll('.pill');
pills.forEach(pill=>{
  pill.addEventListener('click', ()=>{
    pills.forEach(p=>p.classList.remove('active'));
    pill.classList.add('active');
    const cat = pill.dataset.cat;
    Object.keys(groups).forEach(c=>{
      groups[c].forEach(m=>map.removeLayer(m));
    });
    if(cat === 'all'){
      Object.keys(groups).forEach(c=>groups[c].forEach(m=>m.addTo(map)));
    } else {
      groups[cat].forEach(m=>m.addTo(map));
      ALWAYS_ON.forEach(c=>groups[c].forEach(m=>m.addTo(map)));
    }
  });
});
