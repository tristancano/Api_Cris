const url ="https://rickandmortyapi.com/api/character/?name=";



const busqueda = async () =>{
   let Personaje = document.getElementById("Personaje").value
   const response = await fetch (`${url}${Personaje}`);
   const result = await response.json()
   await dibujar (result.results);
   
   
   
}


const dibujar =(results) => {
    document.querySelector("#resultado").innerHTML=""
    for(let i in results){

        let div = document.createElement ("div");
        div.classList.add("column","is-3");


    div.innerHTML+=`<div class=" column is-3">
        <div class="card>"</div>
            <div class="card-image" style="width: 18rem;">
            <img src="${results[i].image}" class="card-img-top" alt="imagen">
            </div>
        <div class="card-body">
            <h5 class="card-title">${results[i].name}</h5>
            <p class="card-text">${results[i].species}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`

    div.addEventListener("click",function(){
        alert(results[i].episode);
    })
    document.querySelector("#resultado").appendChild(div);
    

    }

 /*<div class=" column is-3">
            <div class="card>"</div>
                <div class="card-image" style="width: 18rem;">
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" class="card-img-top" alt="imagen">
                </div>
            <div class="card-body">
                <h5 class="card-title">Rick Sanchez</h5>
                <p class="card-text">Status: Alive</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  */         

}

let boton = document.querySelector("#busqueda");
boton.addEventListener("click",busqueda);
let input = document.querySelector("#Personaje");
input.addEventListener("keypress",busqueda);







const charContainer = document.getElementById("charContainer");

fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(element => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imagen = document.createElement("img");
      imagen.src = element.image;
      imagen.alt = "Imagen de un perro";

      card.appendChild(imagen);
      charContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });


