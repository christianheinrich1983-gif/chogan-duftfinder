const grid=document.getElementById("grid")

function renderPerfumes(list){

grid.innerHTML=""

list.forEach(p=>{

let div=document.createElement("div")

div.className="card"

let img="images/flacon-men-30ml.jpg"

if(p.cat==="damen"){
img="images/flacon-women-30ml.jpg"
}

if(p.cat==="luxury"){
img="images/flacon-black-50ml.jpg"
}

div.innerHTML = `

<img src="${img}">

<div class="card-title">

${p.number} ${p.name}

</div>

`
`

grid.appendChild(div)

})

}

renderPerfumes(perfumes)