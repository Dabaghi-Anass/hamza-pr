export const pokemonsEndPoint = "https://pokeapi.co/api/v2/pokemon/";
export const moveEndPoint = "https://pokeapi.co/api/v2/move/";

export function getPokemonsEndPoint(offset : number,limit: number){
    return `${pokemonsEndPoint}?offset=${offset}&limit=${limit}`
}
export function getMoveEndPoint(moveName : string){
    return `${moveEndPoint}${moveName}`
}