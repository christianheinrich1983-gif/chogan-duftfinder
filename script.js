const grid = document.getElementById("grid")

function renderPerfumes(list){

grid.innerHTML=""

list.forEach(p=>{

let img="flacon-men-30ml.jpg"

if(p.cat==="damen"){
img="flacon-women-30ml.jpg"
}

if(p.cat==="luxury"){
img="flacon-black-50ml.jpg"
}

let div=document.createElement("div")

div.className="card"

div.innerHTML = `

<img src="${img}">

<div class="card-title">
${p.number} – Chogan ${p.name}
</div>

`

div.onclick = function(){

alert(

"Chogan "+p.number+" - "+p.name+"\n\n"+
"Inspiriert von: "+p.inspired+"\n\n"+
p.desc

)

}

grid.appendChild(div)

})

}

renderPerfumes(perfumes)
