console.log("Inicio")

let div_personajes = document.getElementById('results')

let consulta = fetch('https://rickandmortyapi.com/api/character')
                .then((response)=>{
                    return response.json()
                })
                .then ((data)=>{
                    
                    data.results.forEach(element => {
                        console.log(element.name)
                        div_personajes.innerHTML +="<h1>"+ element.name+"</h1><br>"
                        div_personajes.innerHTML +="<h4>"+ element.species+"</h4><br>"        
                        div_personajes.innerHTML += `<img src = '${element.image}'> <br>`    
                    });
                    
                })


console.log("fin")