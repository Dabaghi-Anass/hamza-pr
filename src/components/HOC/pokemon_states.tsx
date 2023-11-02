import { PokemonState } from "@/types/pokemon";
import { Badge } from "../ui/badge";
import Move from "./move";
function PokemonStates({pokemon} : {pokemon : PokemonState | undefined}) {
  if(!pokemon) return <></>
  return (
    <div className="pokemon-states w-full flex flex-col md:flex-row overflow-y-auto">
      <div className="bg-primary-100 w-full md:w-[40%] overflow-y-auto h-full rounded-lg p-4 flex flex-col gap-8">
        <div className="flex align-start gap-8">
          <div className="w-[50%]">
            <img className="w-full" src={pokemon?.sprites?.front_default} />
          </div>
          <div className="py-2">
            <span className="pokemon-name text-2xl font-bold">{pokemon.name}</span>
            <div className="badges mt-2 flex gap-1 flex-wrap">
              {pokemon.types.map((type) => (
                  <Badge key={type.type.name} className="bg-[#A50028]">{type.type.name}</Badge>
              ))}
              
            </div>
          </div>
        </div>
        <div className="border-white border relative rounded p-4 grid grid-cols-2 gap-4">
          <span className="section-name absolute top-0 left-2 bg-primary-100 px-2 -translate-y-3 font-semibold">
            Profile
          </span>
          <div className="flex flex-col gap-2">
            <span className="skill-name">Height</span>
            <span className="skill-value break-words font-semibold text-yellow">
              {pokemon.height}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="skill-name">Weight</span>
            <span className="skill-value break-words font-semibold text-yellow">
              {pokemon.weight}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="skill-name">Base Experience</span>
            <span className="skill-value break-words font-semibold text-yellow">
              {pokemon.base_experience}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="skill-name">Abilities</span>
            <span className="skill-value break-words font-semibold text-yellow">
              {pokemon.abilities.map(e => e.ability.name)?.join(",")}
            </span>
          </div>
        </div>
        <div className="border-white border relative  rounded p-6 grid grid-cols-2 gap-4">
          <span className="section-name absolute top-0 left-2 bg-primary-100 px-2 -translate-y-3 font-semibold">
            States({pokemon.stats?.length})
          </span>
          {pokemon.stats?.map(state => (
            <div className="skill flex flex-col items-center gap-1" key={state.stat.name}>
              <div className="progress" style={{ '--_progress':  `${state.base_stat}%` } as React.CSSProperties}>
                <div className="progress-circle flex items-center justify-center" >{state.base_stat}</div>
              </div>
              <span>{state.stat.name}</span>
          </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col py-4 px-8 md:w-[60%] w-full">
        <div className="header flex items-center w-full gap-3">
          <span className="text-3xl w-[50%]">Moves({pokemon.moves.length})</span>
          <div className="line h-1 w-full bg-[#2E4261]"></div>
        </div>
        <div className="moves flex flex-col py-4 gap-4 max-h-[90vh] overflow-y-auto">
          {pokemon.moves.map(move => <Move key={move.move.name} move={move.move}/>)}
        </div>
      </div>
    </div>
  );
}

export default PokemonStates;
