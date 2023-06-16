<template>
    <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
        <v-card class="fade-in" v-if="pokemon" >

            <h1>Quien es este pokemon?</h1>
            <PokemonPicture :pokemonID="pokemon.id" :showPokemon="showPokemon"/>
            <br>
            <PokemonOptions v-if="showQuestion"
            :pokemons="pokemonArr"
            @selection="checkAnswer($event)"
            />
            <v-container v-if="showAnswer">
                <h2 class="fade-in">{{ message }}</h2>
            <br>   
            <v-btn class="fade-in" rounded="lg" @click="newGame"> Nuevo juego</v-btn>

            </v-container>

        </v-card>
            
            <v-container v-else>
            <h1>Espere porfavor...</h1>
            </v-container>
      </v-col>
     </v-row>

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
            intentos: 3,
            showQuestion: true,
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
                this.showQuestion=false;
            } else {
                this.intentos=this.intentos-1;
                this.message = `Incorrecto, Te quedan un ${this.intentos} intento`
                this.showPokemon = false
                if(this.intentos==0) { 
                    this.message= `Opps, perdiste`;
                    this.showQuestion=false;
                }
            }
        },
        newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this. pokemon = null,
            this.intentos = 3,
            this.showQuestion= true,
            this.mixPokemonArray()
        }
    }
}
</script>
<style>

</style>