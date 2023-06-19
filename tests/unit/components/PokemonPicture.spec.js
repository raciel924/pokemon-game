import {shallowMount} from '@vue/test-utils'
import pokemonPicture from '@/components/PokemonPicture'

describe('pokemonPicture componente', ( ) => {
    test('debe de hacer el match con el snapshot', () => {
        
    })
    test('debe de mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(pokemonPicture,{
            props: {
                pokemonID:1,
                showPokemon:false,
            }
        }) 
       const {img1, img2} = wrapper.findAll('div')
       console.log(img1)
       // expect(img1.toExist()).toBeTruthy()
       // expect(img2).toBeTruthy(undefined)
       // expect(img1.classes('hiden-pokemon')).toBe(true)
    })
    test('debe de mostrar el pokemon si showPokemon:true', () => {
        
    })
})