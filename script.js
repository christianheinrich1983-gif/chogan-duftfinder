const grid = document.getElementById("grid")

function showPerfume(p){

document.getElementById("grid").style.display="none"
document.getElementById("detail").style.display="block"

document.getElementById("detail-title").innerText =
"Chogan "+p.number+" – "+p.name

document.getElementById("detail-inspired").innerText =
"Inspiriert von: "+p.inspired

document.getElementById("detail-desc").innerText =
p.desc

}
