import { useEffect, useRef, useState } from "react";
import Modal from "./modal";
import Pokemon from "./pokemon";
import PokemonStates from "./pokemon_states";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons, getPokemonState } from "@/api/queries";
import { PokemonState, Pokemon as PokemonType } from "@/types/pokemon";
import { useSelector } from "react-redux";
import PokemonLoading from "./pokemon_loading";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const offset = useRef(0);
  const { current : limit} = useRef(9);
  const [hasMore, setHasMore] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonState | undefined>();
  const searchQuery = useSelector((state: any) => state.search);
  const pokemonsQuery = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => fetchPokemons(0, limit),
  });
  async function showPokemon(url: string) {
    getPokemonState(url).then((data) => {
      setSelectedPokemon(data);
      setModalOpen(true);
    });
  }
  function searchPokemon(query: string) {
    if(!pokemonsQuery?.data?.results) return;
    setPokemons([...pokemonsQuery.data.results]);
    let data = [...pokemonsQuery.data.results ];
    data = data.filter((e) =>
      e.name.toLowerCase().includes(query.toLowerCase().trim())
    );
    setPokemons(data);
  }
  async function fetchMorePokemons(){
    let data = await fetchPokemons(offset.current,limit);
    if (data.results.length === 0) {
      setHasMore(false);
    } else {
      setPokemons((prev) => [...prev, ...data.results]);
      offset.current += limit;
    }
  }
  useEffect(() => {
    setPokemons(pokemonsQuery?.data?.results);
  }, [pokemonsQuery?.data]);
  useEffect(() => {
    searchPokemon(searchQuery.value);
  }, [searchQuery]);
  return (
    <>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <PokemonStates pokemon={selectedPokemon} />
        </Modal>
      )}
      <InfiniteScroll
        dataLength={pokemons?.length}
        next={fetchMorePokemons}
        hasMore={hasMore && searchQuery?.value.length === 0}
        loader={
          <section className="mt-16 md:mt-4 pokemon-list-wrapper w-full h-full px-8 py-4">
            <PokemonLoading /> <PokemonLoading /> <PokemonLoading />
          </section>
        }
        onScroll={() => offset.current+= limit}
      >
        <section className="mt-16 md:mt-4 pokemon-list-wrapper w-full h-full px-8 py-4">
          {pokemons?.map((pokemon: any) => (
            <Pokemon
              key={pokemon.name + `${Math.random() * 100}`}
              pokemon={pokemon}
              onShowPokemon={showPokemon}
            />
          ))}
        </section>
      </InfiniteScroll>
    </>
  );
};

export default PokemonList;
