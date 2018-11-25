/**
 * A pokemon model
 */
export class PokemonModel {

  url: string;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;


  constructor(object) {
    this.url = object.url;
    this.name = object.name;
    this.hp = object.hp;
    this.attack = object.stats.attack;
    this.defense = object.stats.defense;
    this.sp_attack = object.stats.sp_attack;
    this.sp_defense = object.stats.sp_defense;
    this.speed = object.stats.speed;
  }
}
