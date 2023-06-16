
import pokemonApi from '@/api/pokemonApi';
describe('pokemons', () => {

    test('axios configurado correctamente', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
    
})