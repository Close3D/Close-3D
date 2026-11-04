// ── EDIT HERE ─────────────────────────────────────────────
// Photos live in the /images folder next to these files.
// To add or swap a photo: drop the file in /images, then add [filename, alt text] to that product's img list.
// If a file is missing, the card shows the product name instead of a broken image.
const STORE = "https://close3d.myshopify.com";
const VASE = "190 mm (19 cm) tall · PETG or PLA, your choice";
const PRODUCTS = [
 {name:"Armenian Cross Vase", series:"armenian", price:"$45", handle:"armenian-cross-vase-rocky-stone-pla", spec:VASE,
  blurb:"Khachkar-inspired lacework vase, modelled from scratch and printed one at a time.",
  img:[["khachkar-vase-front-corrected-watermark.png","Armenian Khachkar-inspired cross vase, front view"],
       ["tree-of-life-vase-front-watermarked.png","Tree of Life pattern vase, front view"]]},
 {name:"Lake Sevan Vase", series:"armenian", price:"$45", handle:"lake-sevan-vase-3d-printed-armenian-landmark", spec:VASE,
  blurb:"A vase shaped by the highland geography of Lake Sevan, Armenia.",
  img:[["geography-vase-silver.png","Silver 3D printed geography vase"],
       ["lake-sevan-vase.png","Lake Sevan vase, 3D printed"]]},
 {name:"Tatev Monastery Vase", series:"armenian", price:"$50", handle:"tatev-monastery-vase-3d-printed-armenian-landmark", spec:VASE,
  blurb:"Tatev Monastery and its gorge. A piece of Armenia for the shelf.",
  img:[["tatev-1.png","Tatev Monastery 3D printed vase, front view"],
       ["tatev-2.png","Tatev Monastery 3D printed vase, second angle"]]},
 {name:"Steam Clock Vase", series:"vancouver", price:"$45", handle:"steam-clock-vase-gastown-vancouver", spec:VASE,
  blurb:"Gastown's Steam Clock, printed as a vase. Vancouver without a word of text.",
  img:[["steam-clock-1.jpg","Steam Clock vase, 3D printed, on a wood table"],
       ["steam-clock-2.jpg","Steam Clock vase, second angle"]]},
 {name:"Lions Gate Bridge Vase", series:"vancouver", price:"$45", handle:"lions-gate-bridge-vase-vancouver", spec:VASE,
  blurb:"Bridge towers, North Shore ridgeline and water, wrapped around the vase.",
  img:[["LIONS_GATE_LEFTVIEW.jpg","Green and black 3D printed vase showing Lions Gate Bridge, on a wood table"],
       ["LIONS_GATE_BRIDGE_FRONT.jpg","Front of the Lions Gate Bridge vase showing the bridge and skyline relief"]]},
 {name:"Science World Vase", series:"vancouver", price:"$45", handle:"science-world-vase-vancouver", spec:VASE,
  blurb:"Science World's geodesic dome and the False Creek skyline.",
  img:[["science-world-1.jpg","Science World vase, 3D printed, on a wood table"],
       ["science-world-2.jpg","Science World vase, second angle"]]},
 {name:"Adjustable Phone/Tablet Stand", series:"other", price:"$22", handle:"adjustable-phone-tablet-stand-3d-printed-in-petg",
  blurb:"Adjustable-angle stand printed in PETG.",
  img:[["phone-stand-front.png","3D printed adjustable phone stand, front"],
       ["phone-stand-rear.png","3D printed adjustable phone stand, rear"]]},
 {name:"Custom Keychains", series:"other", price:"from $12", handle:"custom-keychains-personalized-3d-printed",
  blurb:"Personalized PETG keychains, black with silver branding.",
  img:[["IMG_20260623_154207120_HDR.jpg","Close 3D custom keychain, front view, black PETG with silver branding"],
       ["IMG_20260623_154310694_HDR_1_2.jpg","Close 3D custom keychain, angled view"]]}
];
function card(p){
  const url = STORE+"/products/"+p.handle;
  const pics = `<span>${p.name}</span>` + p.img.map(i=>`<img src="img/${i[0]}" alt="${i[1]}" loading="lazy" onerror="this.remove()">`).join("");
  const spec = p.spec ? `<p class="spec">${p.spec}</p>` : "";
  return `<article class="card"><a class="ph" href="${url}">${pics}</a><div class="info"><h3>${p.name}</h3><p>${p.blurb}</p>${spec}<div class="foot"><span class="price">${p.price}</span><a class="buy" href="${url}">Buy on store</a></div></div></article>`;
}
document.querySelectorAll("[data-series]").forEach(el=>{
  const s = el.dataset.series;
  el.innerHTML = PRODUCTS.filter(p=>s==="all"||p.series===s).map(card).join("");
});
