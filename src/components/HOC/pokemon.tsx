import { Pokemon as PokemonType } from "@/types/pokemonTypes"
type Props =  {
  pokemon : PokemonType ,
  onShowPokemon : (url:string) => void
}
const Pokemon = ({pokemon , onShowPokemon} : Props) => {
  return (
    <div className="pokemon-wrapper h-[250px] bg-white rounded-xl p-2 w-full">
        <div className="relative red-white flex justify-center ">
            <span className="my-3 text-xl font-bold capitalize text-[var(--text-color-dark)]">{pokemon.name}</span>
            <button onClick={() => onShowPokemon(pokemon.url)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow py-4 px-8 rounded-xl border-8 border-[var(--text-color-dark)] hover:bg-[var(--text-color-yellow-dark)] transition-all">Show Details</button>
        </div>
    </div>
  )
}

export default Pokemon