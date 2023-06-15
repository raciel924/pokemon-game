import  pokemonApi  from '@/api/pokemonApi';
const getPokemons = () => {

    const PokemonsArr =Array.from(Array(650))
   return PokemonsArr.map((_ , index) => index +1 )

}

const getPokemonsOptions = async () => { 
    const mixedPokemon = getPokemons().sort(()=> Math.random()-0.5);
  const pokemons  =await getPokemonsNames(mixedPokemon.splice(0,4));
 return pokemons
}
const getPokemonsNames = async ( [nameA,nameB,nameC,nameD] =[]) => {

    const promiseAll = [
        pokemonApi.get(`/${nameA}`),
        pokemonApi.get(`/${nameB}`),
        pokemonApi.get(`/${nameC}`),
        pokemonApi.get(`/${nameD}`),
    ]
   const [respA, respB, respC, respD]= await Promise.all(promiseAll); // con este puedes hacer muchas peticiones
    return [
      
    {name: respA.data.name, id: respA.data.id },
    {name: respB.data.name, id: respB.data.id },
    {name: respC.data.name, id: respC.data.id },
    {name: respD.data.name, id: respD.data.id },
    ]
}

export default getPokemonsOptions;