const edits=[
 {title:"MORNING SILENCE",cat:"travel",meta:"Travel · 2026",img:"images/morning.jpg"},
 {title:"CITY LIGHTS",cat:"street",meta:"Street · 2026",img:"images/city.jpg"},
 {title:"WINGS OF FREEDOM",cat:"nature",meta:"Nature · 2026",img:"images/bird.jpg"},
 {title:"HIDDEN PARADISE",cat:"mountain",meta:"Landscape · 2026",img:"images/waterfall.jpg"},
 {title:"FOREST ROAD",cat:"mountain",meta:"Nature · 2026",img:"images/forest.jpg"},
 {title:"NIGHT RIDER",cat:"bike",meta:"Bike · 2026",img:"images/bike.jpg"}
];
const grid=document.getElementById("editGrid");
function render(filter="all"){
 if(!grid)return;
 grid.innerHTML=edits.filter(x=>filter==="all"||x.cat===filter).map(x=>`
 <article class="edit-card">
  <img src="${x.img}" alt="${x.title}">
  <div class="edit-overlay"><h3>${x.title}</h3><small>${x.meta}</small><span>→</span></div>
 </article>`).join("");
}
render();
document.querySelectorAll("#filters button").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll("#filters button").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active"); render(btn.dataset.filter);
}));
document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",async()=>{
 try{await navigator.clipboard.writeText(btn.dataset.copy)}catch(e){}
 const toast=document.getElementById("toast");toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1600);
}));
document.getElementById("menuBtn")?.addEventListener("click",()=>document.body.classList.toggle("menu-open"));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>document.body.classList.remove("menu-open")));
document.getElementById("searchBtn")?.addEventListener("click",()=>document.getElementById("edits")?.scrollIntoView());
