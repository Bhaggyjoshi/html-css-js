// display all the pokemons
display=(pokemons)=>{

    let overIndex = pokemons.length;
    let pokeStrings = "";
    pokemons.map((pokemon,index)=>{
        pokeStrings += `
            <div class="pokemon">
            
                <div class="over" style="z-index:${overIndex}">
                    <div style="padding:20px 15px; display:flex;justify-content:space-between;">
                       <div>
                            <h1>${pokemon.name}</h1>
                            <p>${pokemon.type}</p>
                       </div>
                       <i class="fa fa-trash clear" aria-hidden="true" onclick="deletePokemon('${pokemon._id}')"></i>
                    </div>
                    
                </div>


                <div class="poke_info" style="z-index:${overIndex-1}">
                    <div class="poke_details" >
                    
                        <p style="width:40%; padding:10px 0;">
                            HP : ${pokemon.base.HP}
                        </p>
                        <p style="width:40%; padding:10px 0;">
                            Defense: ${pokemon.base.Defense}
                        </p>
                        
                        <p style="width:40%; padding:10px 0;">
                            Attack : ${pokemon.base.Attack}
                        </p>
                        <p style="width:40%; padding:10px 0;">
                        Speed : ${pokemon.base.Speed}
                        </p>
                    </div>
                </div>
            </div>
            
             
            
            
        `
        overIndex --;
})

document.getElementById('pokemons').innerHTML = pokeStrings;
}

let allPokemons = [];

// fetch all pokemons
fetch("http://localhost:8000/pokemons")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    allPokemons=data;
    display(allPokemons);
})
.catch((err)=>{
    console.log(err);
})
//adding pokemons 
addPokemon=()=>{
    let pokemon={ 
                    base:{} 
                };
    pokemon.name = document.getElementById('name').value;
    pokemon.type = document.getElementById('type').value;
    pokemon.base.HP = document.getElementById('hp').value;
    pokemon.base.Attack = document.getElementById('attack').value;
    pokemon.base.Defense = document.getElementById('defense').value;
    pokemon.base.Speed = document.getElementById('speed').value;
    // console.log(pokemon)
    fetch("http://localhost:8000/pokemons",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",//=>that the request body format is JSON
            },
            body: JSON.stringify(pokemon)
    })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            document.getElementById('clearForm').reset();
            allPokemons.push(data);
            display(allPokemons);
            
        })
        .catch((err)=>{
            console.log(err);
        })
}

deletePokemon=(id)=>{
    fetch(`http://localhost:8000/pokemons/${id}`,{
        method:"DELETE",
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        let ind = allPokemons.findIndex(p=>p._id==id); 
        allPokemons.splice(ind,1);
        display(allPokemons);
        
    })
    .catch((err)=>{
        console.log(err);
    })
}