const places = [
  {n:"Ashton Court Estate — Fiesta Site", cat:"fiesta", lat:51.4437384, lng:-2.6381437, note:"~58 min walk. This is it — where the actual Balloon Fiesta happens. Free entry, no tickets needed.", url:"https://www.google.com/maps/place/?q=place_id:ChIJb2CBVquNcUgRo4FMeF8eZAU"},
  {n:"Bristol Temple Meads Station", cat:"station", lat:51.4497104, lng:-2.5806191, note:"~9 min walk. Where your train arrives Saturday and departs Sunday. Shuttle bus to the Fiesta also leaves from here.", url:"https://www.google.com/maps/place/?q=place_id:ChIJQ3WFcgCPcUgRugWR02CH5bA"},
  {n:"Travelodge Bristol Central Mitchell Lane", cat:"hotel", lat:51.4508112, lng:-2.5880765, note:"Your hotel — anchor point for distances.", url:"https://maps.google.com/?cid=743774322461684919"},

  // FREE
  {n:"Bristol Museum & Art Gallery", cat:"free", lat:51.4564954, lng:-2.6050953, note:"~22 min walk. Free entry, closed Mondays. Includes a Banksy piece.", url:"https://maps.google.com/?cid=4458557562126287934"},
  {n:"M Shed", cat:"free", lat:51.4476479, lng:-2.5982375, note:"~13 min walk. Free dockside museum on Bristol's history.", url:"https://maps.google.com/?cid=8538575726894730822"},
  {n:"The Georgian House Museum", cat:"free", lat:51.4538655, lng:-2.6033076, note:"~18 min walk. Free, open Thu–Sun 11am–4pm only.", url:"https://maps.google.com/?cid=17065518502847147358"},
  {n:"Blaise Museum", cat:"free", lat:51.505778, lng:-2.63246, note:"~111 min walk. Free, but ~5 miles north — separate trip, not walkable with the rest.", url:"https://maps.google.com/?cid=2438970746493625602"},
  {n:"The Red Lodge Museum", cat:"free", lat:51.4553629, lng:-2.5997336, note:"~15 min walk. Free, open Thu–Sun 11am–4pm only.", url:"https://maps.google.com/?cid=14284117167024965305"},
  {n:"Palestine Museum & Cultural Centre", cat:"free", lat:51.4556886, lng:-2.5947703, note:"~12 min walk. Free, open Sat–Sun 11am–6pm — perfect for your dates.", url:"https://maps.google.com/?cid=12085649832069372630"},
  {n:"Arnolfini Arts", cat:"free", lat:51.4493123, lng:-2.5973741, note:"~11 min walk. Free gallery entry, some events ticketed.", url:"https://maps.google.com/?cid=6845675639895249327"},
  {n:"Underfall Yard", cat:"free", lat:51.4468894, lng:-2.6180007, note:"~34 min walk. Free visitor centre, working historic boatyard.", url:"https://maps.google.com/?cid=8837650502366412831"},
  {n:"Cabot Tower & Brandon Hill", cat:"free", lat:51.4540263, lng:-2.6068101, note:"~22 min walk. Free — best panoramic view over the whole city.", url:"https://maps.google.com/?cid=2282874465101762944"},
  {n:"Clifton Suspension Bridge", cat:"free", lat:51.4549089, lng:-2.6278553, note:"~45 min walk. Free to walk across, plus a free Visitor Centre by the bridge.", url:"https://maps.google.com/?cid=17118571217094634702"},
  {n:"Bristol Cathedral", cat:"free", lat:51.4516518, lng:-2.6006447, note:"~14 min walk. Free, donations welcome. Shorter hours on Sunday.", url:"https://maps.google.com/?cid=1946930996653712780"},
  {n:"St Mary Redcliffe Church", cat:"free", lat:51.4483337, lng:-2.5895223, note:"~5 min walk. Free, stunning Gothic architecture.", url:"https://maps.google.com/?cid=9401261546173552576"},
  {n:"Pero's Bridge", cat:"free", lat:51.4501036, lng:-2.5979384, note:"~11 min walk. Free — on your Saturday walking route to the Fiesta.", url:"https://maps.google.com/?cid=12334067635226986228"},
  {n:"Statue of Cary Grant", cat:"free", lat:51.4498426, lng:-2.6009106, note:"~15 min walk. Free quick photo stop on the Harbourside.", url:"https://maps.google.com/?cid=13436932856507980985"},
  {n:"Banksy Walk Bristol", cat:"free", lat:51.4555704, lng:-2.6064919, note:"~22 min walk. Free self-guided street art spot near Berkeley Square.", url:"https://maps.google.com/?cid=14919491036703569586"},
  {n:"Castle Park", cat:"free", lat:51.4558253, lng:-2.5880581, note:"~9 min walk. Free riverside park with church ruins.", url:"https://maps.google.com/?cid=15615145335287111975"},
  {n:"Millennium Square", cat:"free", lat:51.449795, lng:-2.6004516, note:"~14 min walk. Free public square, fountains and sculptures.", url:"https://maps.google.com/?cid=727230243578170860"},
  {n:"Queen Square", cat:"free", lat:51.4511825, lng:-2.594571, note:"~7 min walk. Free elegant Regency square with lawns.", url:"https://maps.google.com/?cid=1054754534944787718"},
  {n:"The Centre", cat:"free", lat:51.4532218, lng:-2.5974609, note:"~11 min walk. Free riverside concourse, food stalls nearby.", url:"https://maps.google.com/?cid=5889288656463484825"},
  {n:"Round Pool", cat:"free", lat:51.455569, lng:-2.5890358, note:"~9 min walk. Free small water feature, part of Castle Park area.", url:"https://maps.google.com/?cid=11099603669790705864"},
  {n:"Clifton Down", cat:"free", lat:51.461429, lng:-2.6250424, note:"~46 min walk. Free rolling green downs with river views.", url:"https://maps.google.com/?cid=6554923641144562287"},
  {n:"Dame Emily Park", cat:"free", lat:51.4426272, lng:-2.6015513, note:"~21 min walk. Free park in Southville, playground and skate park.", url:"https://maps.google.com/?cid=3034929056123253360"},
  {n:"The Bearpit", cat:"free", lat:51.45946, lng:-2.5907347, note:"~16 min walk. Free central underpass plaza, arts and markets.", url:"https://maps.google.com/?cid=16346398314872875665"},
  {n:"Windmill Hill City Farm", cat:"free", lat:51.4424552, lng:-2.5932025, note:"~16 min walk. Free city farm in Bedminster.", url:"https://maps.google.com/?cid=248881932638884399"},
  {n:"Lloyds Amphitheatre", cat:"free", lat:51.4484707, lng:-2.5996293, note:"~14 min walk. Free harbourside amphitheatre space.", url:"https://maps.google.com/?cid=15512874554198834116"},

  // PAID
  {n:"Brunel's SS Great Britain", cat:"paid", lat:51.4491712, lng:-2.6084058, note:"~23 min walk. ~£20pp — Bristol's top attraction, includes Being Brunel.", url:"https://maps.google.com/?cid=1584297925753515299"},
  {n:"Bristol Aquarium", cat:"paid", lat:51.4507466, lng:-2.5990346, note:"~12 min walk. ~£22.50pp — underwater tunnels, sharks, touch pools.", url:"https://maps.google.com/?cid=16282619830663905259"},
  {n:"We The Curious", cat:"paid", lat:51.4504841, lng:-2.6001037, note:"~14 min walk. Science centre + UK's only 3D planetarium.", url:"https://maps.google.com/?cid=15333687718761788150"},
  {n:"Wake The Tiger", cat:"paid", lat:51.445601, lng:-2.5662171, note:"~26 min walk. Immersive art experience, further east.", url:"https://maps.google.com/?cid=6114971640859421568"},
  {n:"Upside Down House", cat:"paid", lat:51.4503936, lng:-2.5993263, note:"~13 min walk. ~£6.95pp novelty photo attraction.", url:"https://maps.google.com/?cid=3295278658152682633"},
  {n:"The Bristol Wheel", cat:"paid", lat:51.4503656, lng:-2.5994528, note:"~13 min walk. Ferris wheel at Millennium Square, paid per ride.", url:"https://maps.google.com/?cid=12359167585956040336"},
  {n:"Bristol Packet Boat Trips", cat:"paid", lat:51.448383, lng:-2.606281, note:"~21 min walk. Harbour boat tours, various lengths.", url:"https://maps.google.com/?cid=13336684773859365993"},
  {n:"The Matthew of Bristol", cat:"paid", lat:51.447548, lng:-2.5992892, note:"~14 min walk. Free viewing, donations relied on — closed Mondays.", url:"https://maps.google.com/?cid=13284405000300986100"},
  {n:"Cross-Harbour Ferry", cat:"paid", lat:51.4489545, lng:-2.6069902, note:"~22 min walk. Cheap (~£1.30) — handy shortcut across the harbour.", url:"https://maps.google.com/?cid=13749044694653007733"},
  {n:"Bristol Ghost Tours", cat:"paid", lat:51.4514856, lng:-2.600234, note:"~14 min walk. Guided tour, meets at the Cathedral.", url:"https://maps.google.com/?cid=16469103423170000318"},
  {n:"Clue HQ Escape Game", cat:"paid", lat:51.4571909, lng:-2.5924745, note:"~13 min walk. Escape room experience.", url:"https://maps.google.com/?cid=9720961168437277112"},
  {n:"Locked In A Room Bristol", cat:"paid", lat:51.4497115, lng:-2.6012796, note:"~15 min walk. Escape room, Harbourside location.", url:"https://maps.google.com/?cid=7439621603867700407"},
  {n:"Hell In A Cell Escape Rooms", cat:"paid", lat:51.4422342, lng:-2.5963805, note:"~18 min walk. Escape room, Bedminster.", url:"https://maps.google.com/?cid=1870448953732730909"},
  {n:"Escape Hunt Bristol", cat:"paid", lat:51.4582552, lng:-2.5856039, note:"~14 min walk. Escape room, Cabot Circus.", url:"https://maps.google.com/?cid=4530710530348132217"},
  {n:"Lane7 Bristol", cat:"paid", lat:51.4498009, lng:-2.6019825, note:"~16 min walk. Bowling, darts, arcade games.", url:"https://maps.google.com/?cid=10008819465084058501"},

  // BUBBLE TEA
  {n:"Chatime", cat:"boba", lat:51.4576288, lng:-2.5916492, note:"~13 min walk. Bubble tea — central on Union St, Broadmead.", url:"https://www.google.com/maps/place/?q=place_id:ChIJccJqDSiPcUgRB-TwFWWV_fc"},
  {n:"Bubbleology", cat:"boba", lat:51.4587581, lng:-2.5854291, note:"~15 min walk. Bubble tea — highest rated of the cluster (4.7\u2605), Broadmead.", url:"https://www.google.com/maps/place/?q=place_id:ChIJF15vH9GPcUgRqUJvBwl0pCs"},
  {n:"Papawcha Bristol & Mahjong Club", cat:"boba", lat:51.4578478, lng:-2.5902127, note:"~13 min walk. Bubble tea — also has a mahjong club to sit and play, 4.7\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJ9SKOexqPcUgRW4yjw2W4Wjw"},
  {n:"Gong Cha", cat:"boba", lat:51.4573216, lng:-2.5885628, note:"~12 min walk. Bubble tea — international chain, spacious, self-order screens.", url:"https://www.google.com/maps/place/?q=place_id:ChIJgfYlFS-PcUgRTgz2Wg78pSQ"},
  {n:"CUPP Cabot Circus", cat:"boba", lat:51.4576744, lng:-2.5865693, note:"~13 min walk. Coffee, matcha and boba combo, Broadmead.", url:"https://www.google.com/maps/place/?q=place_id:ChIJn4O3_HCOcUgRwNcOqMoc23k"},
  {n:"Chahalo\u8336\u8bdd\u5f04 - Bristol", cat:"boba", lat:51.4553087, lng:-2.6005284, note:"~16 min walk. Bubble tea — authentic Chinese-style tea, no creamer/mass-produced ingredients, 4.7\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJnf45vyiNcUgRMjX0byYnuEU"},
  {n:"Cha & Chill", cat:"boba", lat:51.4473229, lng:-2.5986136, note:"~13 min walk. Bubble tea — family-run, Thai milk teas made with real leaves, Wapping Wharf, 4.9\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJjwrjQPiNcUgRSU54M_Eelwg"},
  {n:"Kumomo", cat:"boba", lat:51.4554297, lng:-2.6185724, note:"~35 min walk. Matcha specialist — widely called the best matcha in Bristol, Clifton, 4.9\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJ-0iMHd6NcUgRbvFeAVONJBE"},
  {n:"Jo's Tea Queen's Road", cat:"boba", lat:51.4563332, lng:-2.6066872, note:"~23 min walk. Bubble tea — Bristol-born, extensive menu with seasonal specials, Clifton, 4.4\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJV1XhuYKNcUgRQkBO9C9-Ark"},

  // LUNCH / DINNER
  {n:"Gurt Wings", cat:"meal", lat:51.4475839, lng:-2.5975149, note:"~12 min walk (Wapping Wharf). Casual counter service — no booking needed. Chicken wings, 4.6\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJUwKRvHmNcUgRZHPZ3JiZ7ZI"},
  {n:"Moltobuono!", cat:"meal", lat:51.4546822, lng:-2.6031878, note:"~18 min walk (Park St). Popular Italian — booking recommended, especially weekend evenings. 4.8\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJCe_doViNcUgRFV8rOCulvAo"},
  {n:"Gigi's Pizza Shop", cat:"meal", lat:51.4564988, lng:-2.5803957, note:"~13 min walk (Old Market). Walk-in only, can have a wait at peak times. 4.9\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJY5jTWoGPcUgRMph2kwiWWBE"},
  {n:"Low & Slow", cat:"meal", lat:51.4637371, lng:-2.6090259, note:"~33 min walk (Whiteladies Rd; also has a closer St Nicholas Market stall). Order-counter BBQ, no booking — weekend brisket can sell out early.", url:"https://www.google.com/maps/place/?q=place_id:ChIJaW-2UsONcUgRW2vab2_sm5A"},
  {n:"Daily Noodles", cat:"meal", lat:51.4468952, lng:-2.5991237, note:"~14 min walk (Wapping Wharf). Casual, no booking needed. 4.2\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJc44p9tSNcUgROO99MLPT64M"},
  {n:"Pizzarova", cat:"meal", lat:51.4532536, lng:-2.6009268, note:"~15 min walk (Park St). Walk-ins fine, short wait possible at lunch rush. 4.6\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJTRJJqW2NcUgRZM5ARTe4LYc"},
  {n:"Omar's Kitchen", cat:"meal", lat:51.4824654, lng:-2.5866625, note:"~57 min walk (~2.5 miles, Bishopston — bus/taxi territory). Fri\u2013Sun only, no booking. 4.8\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJVzAMLrqPcUgRS9LmRBzcT9Q"},
  {n:"Izakaya x Yakiniku", cat:"meal", lat:51.4524664, lng:-2.5989806, note:"~13 min walk (College Green). Booking recommended — reviews say it gets busy. 4.5\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJq2l1BNeNcUgRLHNYMZdfu_o"},
  {n:"Crispy Dosa Restaurant", cat:"meal", lat:51.4559506, lng:-2.5909096, note:"~10 min walk (closest South Indian option). Vegetarian, dosas & thalis, walk-in, no booking needed.", url:"https://www.google.com/maps/place/?q=place_id:ChIJtdf7jBGPcUgRgDHoMQv7ies"},
  {n:"Krishna's Inn", cat:"meal", lat:51.4559778, lng:-2.6073858, note:"~20 min walk (The Triangle). Genuinely Keralan specialities, walk-in.", url:"https://www.google.com/maps/place/?q=place_id:ChIJ78SkydqNcUgRWxl013sXEYk"},
  {n:"Kal Dosa", cat:"meal", lat:51.4712847, lng:-2.5930996, note:"~24 min walk (Gloucester Rd, Bishopston). Highest-rated South Indian here, 4.8\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJp--LJj-PcUgRzrKbderJV8I"},
  {n:"Hotwells Eatery", cat:"meal", lat:51.4511341, lng:-2.6077048, note:"~22 min walk (Hotwells). Indian, 5.0\u2605 (223 reviews) — reviews call the biryani the best in the UK. Small and popular, booking recommended for evenings.", url:"https://www.google.com/maps/place/?q=place_id:ChIJJwISk4CNcUgRKVzy_aBlaS8"},
  {n:"Haveli The Yard", cat:"meal", lat:51.4571948, lng:-2.5969261, note:"~15 min walk (Upper Maudlin St). Halal Pakistani/Afghani/Indian, 4.6\u2605 (937 reviews) — tawa platters, no alcohol (mocktail bar instead). Booking recommended for groups.", url:"https://www.google.com/maps/place/?q=place_id:ChIJ3dZRFoGNcUgRvYiifTj885k"},

  // DESSERT
  {n:"The Pancake Man", cat:"dessert", lat:51.447214, lng:-2.5988015, note:"~14 min walk (Wapping Wharf). Casual walk-up, no booking. Gluten-free waffles, 4.9\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJHR8CQbXncUgRon4H6XqfSjY"},
  {n:"Fluffy Fluffy", cat:"dessert", lat:51.4534991, lng:-2.6012827, note:"~16 min walk (Park St). Walk-in only, queues possible. Souffl\u00e9 pancakes, 4.5\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJV02yqtiNcUgRazMBy0qPl6c"},
  {n:"Cake Tin", cat:"dessert", lat:51.4610534, lng:-2.6022721, note:"~24 min walk (St Michael's Hill). Small shop, walk in and buy, no booking. Cookies, 5.0\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJ6e3w9meNcUgR8NfAIbxH9K4"},

  // BREAKFAST
  {n:"Saffron", cat:"breakfast", lat:51.4553215, lng:-2.6183871, note:"~35 min walk (Clifton Village). Popular brunch spot, no booking — can get busy. 4.6\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJHxZixseNcUgRqbxUditJYGs"},
  {n:"Sandwich Sandwich", cat:"breakfast", lat:51.4534772, lng:-2.5930985, note:"~7 min walk (Baldwin St) — closest breakfast option. Quick counter service, no booking. 4.4\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJk2_6SXiOcUgRBaUj4hARtIk"},

  // CAFE
  {n:"The Garden of Easton", cat:"cafe", lat:51.4681814, lng:-2.5646597, note:"~41 min walk (~2 miles, Easton). Booking needed for dinner; daytime is walk-in/queue only. Plant-filled interior, 4.6\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJo9hmFJCPcUgRCquJNe6mRx4"},
  {n:"The Crafty Egg", cat:"cafe", lat:51.4637561, lng:-2.5899093, note:"~23 min walk (Stokes Croft), nicknamed 'The Crafty Jungle' for its plants. Popular brunch, walk-in with possible short wait. 4.7\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJvzpGZHOOcUgRTy-NEQjc5kU"},
  {n:"The Bristolian", cat:"cafe", lat:51.464853, lng:-2.5891527, note:"~25 min walk (Montpelier). Walk-in only, big queues on Saturday mornings. Plant-filled decor, 4.6\u2605.", url:"https://www.google.com/maps/place/?q=place_id:ChIJffX0SHOOcUgRHU_XQmikBgE"},

  // CHECK FIRST
  {n:"Redcliffe Caves", cat:"check", lat:51.4484039, lng:-2.5922811, note:"~6 min walk. Normally closed — only opens for tours/special events.", url:"https://maps.google.com/?cid=11303468765335463586"},
  {n:"Goldney Grotto", cat:"check", lat:51.4519306, lng:-2.6136749, note:"~29 min walk. Pre-booked tours only, not a walk-up spot.", url:"https://maps.google.com/?cid=1567860524147698617"},
  {n:"Bristol Harbour Railway", cat:"check", lat:51.4480656, lng:-2.5969843, note:"~11 min walk. Runs selected weekends only — check mshed.org first.", url:"https://maps.google.com/?cid=5920646282651720005"},
];

const catIcon = {
  free:"✓",
  paid:"£",
  check:"!",
  hotel:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="6" rx="1.5"/><path d="M3 17v3"/><path d="M21 17v3"/><path d="M5 11V6.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V11"/></svg>',
  fiesta:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 6 6 6 10c0 3.5 2.3 5.8 4 6.6V18h4v-1.4c1.7-.8 4-3.1 4-6.6 0-4-2-8-6-8z"/><line x1="9" y1="16" x2="7.5" y2="19"/><line x1="15" y1="16" x2="16.5" y2="19"/><rect x="9.5" y="19" width="5" height="3" rx="0.5"/></svg>',
  station:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="12" rx="3"/><line x1="5" y1="10" x2="19" y2="10"/><circle cx="8.5" cy="18.5" r="1.3" fill="white" stroke="none"/><circle cx="15.5" cy="18.5" r="1.3" fill="white" stroke="none"/><line x1="7" y1="16" x2="5" y2="19"/><line x1="17" y1="16" x2="19" y2="19"/></svg>',
  boba:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="7"/><line x1="10" y1="2" x2="14" y2="2"/><path d="M7 7h10l-1.3 12.3a2 2 0 0 1-2 1.7h-3.4a2 2 0 0 1-2-1.7L7 7z"/><circle cx="9.7" cy="14" r="0.9" fill="white" stroke="none"/><circle cx="12.3" cy="16.3" r="0.9" fill="white" stroke="none"/><circle cx="14.6" cy="13.5" r="0.9" fill="white" stroke="none"/></svg>',
  breakfast:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z"/><path d="M17 10h1.5a2 2 0 0 1 0 4H17"/><path d="M8 4c0 1-1 1-1 2"/><path d="M12 4c0 1-1 1-1 2"/></svg>',
  meal:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="2" x2="7" y2="22"/><line x1="4" y1="2" x2="4" y2="9"/><line x1="10" y1="2" x2="10" y2="9"/><path d="M4 9c0 1.7 1.3 3 3 3s3-1.3 3-3"/><path d="M18 2c-2.2 0-3.5 2.2-3.5 5.5S15.8 13 18 13"/><line x1="18" y1="2" x2="18" y2="22"/></svg>',
  dessert:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 10a4 4 0 0 1 8 0z"/><path d="M9 10l3 11 3-11"/></svg>',
  cafe:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V10"/><path d="M12 10c-3 0-5-2-5-5 3 0 5 2 5 5z"/><path d="M12 10c3 0 5-2 5-5-3 0-5 2-5 5z"/><path d="M8 21h8l-1-6H9l-1 6z"/></svg>'
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

const festivalWayRoute = [[51.44955,-2.58116],[51.44939,-2.58117],[51.44929,-2.58126],[51.44919,-2.58149],[51.44913,-2.58163],[51.44907,-2.58183],[51.44904,-2.58218],[51.44899,-2.58251],[51.44881,-2.58295],[51.44867,-2.58310],[51.44856,-2.58333],[51.44848,-2.58350],[51.44841,-2.58365],[51.44864,-2.58409],[51.44871,-2.58423],[51.44878,-2.58444],[51.44881,-2.58466],[51.44884,-2.58499],[51.44886,-2.58518],[51.44889,-2.58551],[51.44891,-2.58573],[51.44892,-2.58595],[51.44893,-2.58615],[51.44895,-2.58640],[51.44895,-2.58657],[51.44894,-2.58685],[51.44889,-2.58736],[51.44885,-2.58789],[51.44882,-2.58825],[51.44877,-2.58890],[51.44876,-2.58909],[51.44876,-2.58927],[51.44878,-2.58954],[51.44881,-2.58981],[51.44881,-2.58999],[51.44875,-2.59016],[51.44874,-2.59033],[51.44879,-2.59051],[51.44889,-2.59061],[51.44906,-2.59076],[51.44919,-2.59087],[51.44928,-2.59105],[51.44934,-2.59131],[51.44941,-2.59164],[51.44952,-2.59247],[51.44955,-2.59266],[51.44963,-2.59281],[51.45038,-2.59276],[51.45052,-2.59276],[51.45096,-2.59273],[51.45109,-2.59273],[51.45158,-2.59274],[51.45162,-2.59329],[51.45155,-2.59388],[51.45143,-2.59473],[51.45120,-2.59485],[51.45119,-2.59458],[51.45112,-2.59344],[51.45043,-2.59358],[51.45038,-2.59276],[51.44968,-2.59282],[51.44954,-2.59275],[51.44952,-2.59247],[51.44941,-2.59164],[51.44937,-2.59137],[51.44937,-2.59113],[51.44930,-2.59090],[51.44924,-2.59075],[51.44921,-2.59057],[51.44923,-2.59037],[51.44921,-2.59014],[51.44911,-2.58996],[51.44900,-2.58991],[51.44887,-2.58994],[51.44877,-2.59008],[51.44868,-2.59022],[51.44858,-2.59030],[51.44839,-2.59036],[51.44813,-2.59041],[51.44779,-2.59050],[51.44748,-2.59057],[51.44729,-2.59063],[51.44701,-2.59071],[51.44689,-2.59073],[51.44668,-2.59078],[51.44640,-2.59083],[51.44624,-2.59085],[51.44602,-2.59084],[51.44588,-2.59069],[51.44576,-2.59059],[51.44540,-2.59075],[51.44524,-2.59118],[51.44516,-2.59142],[51.44516,-2.59162],[51.44529,-2.59180],[51.44540,-2.59187],[51.44550,-2.59201],[51.44557,-2.59222],[51.44562,-2.59259],[51.44563,-2.59293],[51.44564,-2.59326],[51.44564,-2.59360],[51.44562,-2.59382],[51.44553,-2.59540],[51.44551,-2.59564],[51.44553,-2.59583],[51.44550,-2.59606],[51.44548,-2.59628],[51.44543,-2.59690],[51.44539,-2.59770],[51.44539,-2.59809],[51.44540,-2.59856],[51.44544,-2.59893],[51.44550,-2.59924],[51.44558,-2.59964],[51.44564,-2.59994],[51.44581,-2.60093],[51.44598,-2.60195],[51.44611,-2.60278],[51.44619,-2.60352],[51.44625,-2.60422],[51.44631,-2.60512],[51.44629,-2.60587],[51.44619,-2.60744],[51.44612,-2.60845],[51.44610,-2.60871],[51.44597,-2.61010],[51.44584,-2.61156],[51.44576,-2.61258],[51.44571,-2.61307],[51.44565,-2.61365],[51.44561,-2.61389],[51.44558,-2.61413],[51.44553,-2.61434],[51.44546,-2.61460],[51.44538,-2.61483],[51.44532,-2.61501],[51.44516,-2.61537],[51.44496,-2.61575],[51.44472,-2.61606],[51.44462,-2.61618],[51.44446,-2.61635],[51.44435,-2.61653],[51.44434,-2.61685],[51.44436,-2.61704],[51.44434,-2.61793],[51.44432,-2.61816],[51.44431,-2.61852],[51.44432,-2.61913],[51.44431,-2.61931],[51.44431,-2.61951],[51.44428,-2.61976],[51.44427,-2.61999],[51.44427,-2.62018],[51.44427,-2.62051],[51.44423,-2.62135],[51.44420,-2.62158],[51.44415,-2.62178],[51.44407,-2.62195],[51.44397,-2.62210],[51.44385,-2.62222],[51.44337,-2.62257],[51.44315,-2.62278],[51.44212,-2.62353],[51.44200,-2.62361],[51.44161,-2.62387],[51.44144,-2.62402],[51.44131,-2.62418],[51.44103,-2.62437],[51.44088,-2.62446],[51.44079,-2.62462],[51.44073,-2.62480],[51.44070,-2.62517],[51.44069,-2.62541],[51.44064,-2.62651],[51.44065,-2.62669],[51.44072,-2.62692],[51.44084,-2.62709],[51.44105,-2.62724],[51.44116,-2.62733],[51.44128,-2.62740],[51.44142,-2.62743],[51.44160,-2.62738],[51.44171,-2.62739],[51.44187,-2.62749],[51.44225,-2.62789],[51.44277,-2.62841],[51.44290,-2.62852],[51.44303,-2.62856],[51.44305,-2.62876],[51.44333,-2.62934],[51.44354,-2.62974],[51.44363,-2.62993],[51.44370,-2.63011],[51.44380,-2.63039],[51.44386,-2.63058],[51.44396,-2.63083],[51.44403,-2.63098],[51.44413,-2.63123],[51.44420,-2.63141],[51.44427,-2.63163],[51.44433,-2.63191],[51.44437,-2.63216],[51.44438,-2.63256],[51.44435,-2.63314],[51.44436,-2.63343],[51.44441,-2.63367],[51.44476,-2.63470],[51.44482,-2.63495],[51.44495,-2.63560],[51.44501,-2.63583],[51.44520,-2.63602],[51.44528,-2.63616],[51.44503,-2.63653],[51.44486,-2.63674],[51.44470,-2.63699],[51.44460,-2.63721],[51.44447,-2.63726],[51.44434,-2.63708],[51.44434,-2.63708]];
L.polyline(festivalWayRoute, {
  color:'#1B3B6F', weight:5, opacity:0.85, dashArray:'10,8', lineCap:'round'
}).addTo(map).bindPopup('<p class="pop-name">Festival Way (Route 33)</p><p class="pop-note">Temple Meads &rarr; Queens Square &rarr; Cumberland Road &rarr; across the River Avon &rarr; Kennel Lodge Road &rarr; Ashton Court. Flat, traffic-free, ~45-60 min. Confirmed against the official Fiesta site, 7-9 Aug 2026.</p>');

const groups = { free:[], paid:[], check:[], hotel:[], fiesta:[], station:[], boba:[], breakfast:[], meal:[], dessert:[], cafe:[] };
const badgeLabel = { free:"Free", paid:"Paid", check:"Double-check", hotel:"Your hotel", fiesta:"Fiesta site", station:"Train station", boba:"Bubble tea", breakfast:"Breakfast", meal:"Lunch/Dinner", dessert:"Dessert", cafe:"Cafe" };

places.forEach(p=>{
  const marker = L.marker([p.lat, p.lng], { icon: makeIcon(p.cat) });
  marker.bindPopup(
    `<p class="pop-name">${p.n}</p>
     <span class="pop-badge ${p.cat}">${badgeLabel[p.cat]}</span>
     <p class="pop-note">${p.note}</p>
     <a class="pop-link" href="${p.url}" rel="noopener">Open in Google Maps →</a>`
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
  breakfast:"Breakfast", meal:"Lunch/Dinner", dessert:"Dessert", cafe:"Cafe",
  check:"Double-check first", fiesta:"Fiesta site", station:"Train station", hotel:"Your hotel"
};
const legendOrder = ['free','paid','boba','breakfast','meal','dessert','cafe','check','fiesta','station','hotel'];

const legendList = document.getElementById('legendList');
legendList.innerHTML = legendOrder.map(cat =>
  `<div class="legend-row">
     <span class="legend-pin ${cat}">${catIcon[cat]}</span>
     ${legendLabel[cat]}
   </div>`
).join('') + `<div class="legend-row"><span class="legend-line"></span>Festival Way (walking route)</div>`;

// Some filter pills expand to multiple underlying categories
const filterGroups = { food: ['breakfast','meal','dessert','cafe'] };

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
      const cats = filterGroups[cat] || [cat];
      cats.forEach(c=>groups[c].forEach(m=>m.addTo(map)));
      ALWAYS_ON.forEach(c=>groups[c].forEach(m=>m.addTo(map)));
    }
  });
});

// Prevent the Key box from ever overlapping/blocking a popup's tappable content
const legendBox = document.querySelector('.legend');
map.on('popupopen', () => { legendBox.style.display = 'none'; });
map.on('popupclose', () => { legendBox.style.display = ''; });
