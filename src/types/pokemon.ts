export interface Pokemon{
    name : string;
    url : string;
}
export interface PokemonType extends Pokemon{}
export interface PokemonTypes{
    slot? : number,
    type : PokemonType
}
export interface PokemonState{
    name : string;
    height : number;
    weight : number;
    base_experience : number;
    abilities : Ability[];
    types : PokemonTypes[];
    stats : StatInfo[];
    moves : MoveInfo[],
    sprites : {
        front_default : string
    }
}

export interface Form extends Pokemon{};
export interface MoveInfo {
    move : Move;
};
export interface Move extends Pokemon{};
export interface Version extends Pokemon{};
export interface Stat extends Pokemon{};
export interface StatInfo{
    base_stat : number;
    effort : number;
    stat : Stat
};
export interface Ability{
    ability : {
        name : string;
        url : string;
    }
    slot? : number;
    is_hidden : boolean
}
export interface PokemonApiResponse{
    count : number;
    next : string;
    previous : string;
    results : Pokemon[];
}