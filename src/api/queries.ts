import axios from "axios"
import { getPokemonsEndPoint } from "./endPoints"
export async function fetchPokemons(o:number,l:number){
    let response = await axios.get(getPokemonsEndPoint(o,l));
    return response?.data || [];
}
export async function getPokemonState(url : string){
    let response = await axios.get(url);
    return response?.data;
}
export async function fetchMoveDetail(url:string){
    let response = await axios.get(url);
    return response?.data;
}