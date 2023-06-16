import getPokemonsOptions,  {getPokemons,getPokemonsNames} from '@/helpers/getPokemonOptions'

describe ('getPokemonsOptions helpers', () => {

    test('debe de regresar un arreglo de pruebas', () => {

        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })
    test('debe de retonar un arreglo de 4 elementos con nombres de los pokemons', async () => {
        const pokemons = await getPokemonsNames([1,2,3,4])
        expect(pokemons[0]).toStrictEqual({ name:'bulbasaur', id: 1})
    })
    test('getPokemons debe de retonar arreglo mezclado', async () => {
        const pokemons = await getPokemonsOptions()
       expect(pokemons.length).toBe(4)
       expect(pokemons).toEqual([
        { name: expect.any(String),  
        id: expect.any(Number)
        },
        { name: expect.any(String),  
            id: expect.any(Number)
        },
       { name: expect.any(String),  
        id: expect.any(Number) },
       { name: expect.any(String),  
        id: expect.any(Number) },])
    })
})