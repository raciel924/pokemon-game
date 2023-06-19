import import getPokemonOptions from '@/helpers/getPokemonOptions';
<template>
<div class="text-center">
    <v-btn
      color="primary"
      @click="dialog = true"
    >
        Info del Pokemon
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-container>
        <v-img
        cover
        height="250"
        :src="pokemonInfo.image"
        ></v-img>
        <v-card-title >
            {{ pokemonInfo.name }} N.{{ pokemonInfo.id }}

         </v-card-title>
        <v-card-text>
        

        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
    </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import  pokemonApi  from '@/api/pokemonApi';
import getPokemonOptions from '@/helpers/getPokemonOptions';
export default {
    name : "modalPokemon",
    props : {
        pokemonID: {
            type: Number,
            required: true
        }
    },
    data () {
      return {
        dialog: false,
        pokemonInfo:{},
      }
    },
    mounted () {
        this.getPokemonInfo()
    },
    methods: {
       async  getPokemonInfo() {
           try{
            const {data} = await pokemonApi.get(`/${this.pokemonID}`);
            this.pokemonInfo = 
                {
                    name: data.name,
                    id: data.id,
                    image: data.sprites.other["dream_world"].front_default,
                    abilities: data.abilities.map(ability => ability.ability.name),
                    types: data.types.map(type => type.type.name)
                } 

            console.log(this.pokemonInfo)
           }catch(e){
            console.error(e)
;           }
        }
    },
}
</script>

<style>

</style>