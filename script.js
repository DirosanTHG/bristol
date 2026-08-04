const places = [
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

  // CHECK FIRST
  {n:"Redcliffe Caves", cat:"check", lat:51.4484039, lng:-2.5922811, note:"Normally closed — only opens for tours/special events.", url:"https://maps.google.com/?cid=11303468765335463586"},
  {n:"Goldney Grotto", cat:"check", lat:51.4519306, lng:-2.6136749, note:"Pre-booked tours only, not a walk-up spot.", url:"https://maps.google.com/?cid=1567860524147698617"},
  {n:"Bristol Harbour Railway", cat:"check", lat:51.4480656, lng:-2.5969843, note:"Runs selected weekends only — check mshed.org first.", url:"https://maps.google.com/?cid=5920646282651720005"},
];

const catIcon = { free:"✓", paid:"£", check:"!", hotel:"🎈" };

function makeIcon(cat){
  return L.divIcon({
    className:"",
    html:`<div class="custom-pin ${cat}">${catIcon[cat]}</div>`,
    iconSize: cat==="hotel" ? [32,32] : [26,26],
    iconAnchor: cat==="hotel" ? [16,16] : [13,13],
    popupAnchor: [0,-14]
  });
}

const map = L.map('map', { zoomControl:true }).setView([51.4508, -2.596], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const groups = { free:[], paid:[], check:[], hotel:[] };
const badgeLabel = { free:"Free", paid:"Paid", check:"Check first", hotel:"Your hotel" };

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
      places.forEach((p,i)=>{});
      Object.keys(groups).forEach(c=>groups[c].forEach(m=>m.addTo(map)));
    } else {
      groups[cat].forEach(m=>m.addTo(map));
      groups.hotel.forEach(m=>m.addTo(map));
    }
  });
});
