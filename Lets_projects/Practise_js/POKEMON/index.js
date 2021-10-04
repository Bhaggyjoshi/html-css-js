// display all the pokemons
display=(pokemons)=>{
    let pokeStrings = "";
    pokemons.map((pokemons,index)=>{
        pokeStrings += `
        
             <div class="pokemon-content">
                <div class="content">
                    <h2>${pokemons.name}</h2>
                    <p>${pokemons.type}</p>
                </div>
            </div>
        `
})
document.getElementById('pokemons').innerHTML = pokeStrings;
}

// fetch all pokemons
fetch("http://localhost:8000/pokemons")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    display(data);
})
.catch((err)=>{
    console.log(err);
})