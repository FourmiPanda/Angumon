/**
 * A player model
 */
import {PokemonModel} from './pokemon.model';

export class PlayerModel {
  name: string;
  pokemons: PokemonModel[];


  constructor(name, pokemons) {
    this.name = name;
    this.pokemons = pokemons;

  }

  choosePokemon(i: number): PokemonModel {
    if (this.pokemons.length < i && i >= 0) {
      return this.pokemons[i];
    }
    return null;
  }


}
