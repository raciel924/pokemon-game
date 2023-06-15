<template>
<div v-if="pokemon">
    <h1>Quien es este pokemon?</h1>
    <PokemonPicture :pokemonID="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions 
    :pokemons="pokemonArr"
    @selection="checkAnswer($event)"
    />
    <div v-if="showAnswer">
        <h2>{{ message }}</h2>
    <button @click="newGame"> Nuevo juego</button>

    </div>
   
</div>
<div v-else>
    <h1>Espere porfavor...</h1>
</div>
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';
console.log(getPokemonOptions());

export default {
    name: "pokemon",
    components: { PokemonPicture, PokemonOptions },
    data() {
        return {
            pokemonArr:[], 
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message:'',
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
    methods: {
        async  mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
           const  rndInt = Math.floor(Math.random() * 4)
           this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(id) {
            this.showAnswer = true;
            
            if (id === this.pokemon.id) {
                this.message = `Correcto, ${this.pokemon.name}`
                this.showPokemon = true
            } else {
                this.message = `Incorrecto, era  ${this.pokemon.name}`
                this.showPokemon = false
            }
        },
        newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this. pokemon = null,
            this.mixPokemonArray()
        }
    }
}
</script>
<style>

</style>