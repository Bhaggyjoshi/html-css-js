fetch("https://lu-poke-api.herokuapp.com/pokemons")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})