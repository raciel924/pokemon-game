<template>
    <div class="pokemon-container">
  <img  v-if="!showPokemon"
   :src="imgSRC"
  class="hiden-pokemon"
  alt="pokemon">
 <img  v-else
 :src="imgSRC" 
  class="fade-in"
  alt="pokemon">
</div>
    </template>
    <script>
    export default {
        name: "pokemonPicture",
        props: {
            pokemonID:{
                type: Number,
                required: true
            },
            showPokemon:{
                type: Boolean,
                required: true,
                default: false
            }
        },
        computed: {
            imgSRC(){
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`
            }
        }
    }
    </script>
    <style scoped>
.hiden-pokemon {
        filter: brightness(0) ;
    }
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
    </style>