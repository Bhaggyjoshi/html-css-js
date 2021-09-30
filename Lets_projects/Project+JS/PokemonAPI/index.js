const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());

// mongdb connection 

mongoose.connect("mongodb://localhost:27017/poke-api", () => {
    console.log("Mongo Connection Successfull!!");
})

// schema 

const pokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    base: {
        HP: Number,
        Attack: Number,
        Defense: Number,
        Speed: Number
    }
})

// model 
const pokemonModel = new mongoose.model('pokemons', pokemonSchema);

// api endpoints 

app.get("/pokemons", async (req, res) => {

    const pokemons = await pokemonModel.find();
    res.status(200).send(pokemons);

})




app.get("/pokemons/:id", async (req, res) => {

    const id = req.params.id;

    const pokemon = await pokemonModel.findOne({ _id: id });
    res.status(200).send(pokemon);


})


app.post("/pokemons", (req, res) => {

    let pokemon = req.body;

    let pokeObj = new pokemonModel(pokemon);

    pokeObj.save(() => {
        res.send({ message: "Pokemon Created" })
    })

})

app.get("/pokemons/:id", (req, res) => {

    const id = req.params.id;

    pokemonModel.deleteOne({ _id: id });
    res.status(200).send({ message: "Pokemon Deleted" });


})







app.listen(8000, () => {
    console.log("Server is running !!!");
})