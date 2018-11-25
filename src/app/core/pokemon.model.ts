/**
 * A pokemon model
 */
import {el} from "@angular/platform-browser/testing/src/browser_util";

export class PokemonModel {

  url: string;
  name: string;
  hp: number;
  lvl: number;
  base_hp: number;
  attack: number;
  defense: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;
  comp_1: {
    name: string,
    pp: number,
    pp_max: number,
  };
  comp_2: {
    name: string,
    pp: number,
    pp_max: number,
  };
  comp_3: {
    name: string,
    pp: number,
    pp_max: number,
  };
  comp_4: {
    name: string,
    pp: number,
    pp_max: number,
  };


  constructor(object) {
    this.url = object.url;
    this.name = object.name;
    this.hp = object.stats.hp;
    this.lvl = object.stats.lvl;
    this.base_hp = object.stats.base_hp;
    this.attack = object.stats.attack;
    this.defense = object.stats.defense;
    this.sp_attack = object.stats.sp_attack;
    this.sp_defense = object.stats.sp_defense;
    this.speed = object.stats.speed;
    if (!object.comp_1) {
      this.comp_1 = {
        name: '--',
        pp: 0,
        pp_max: 0
      };
    } else {
      this.comp_1 = object.comp_1;
    }
    if (!object.comp_2) {
      this.comp_2 = {
        name: '--',
        pp: 0,
        pp_max: 0
      };
    } else {
      this.comp_2 = object.comp_2;
    }
    if (!object.comp_3) {
      this.comp_3 = {
        name: '--',
        pp: 0,
        pp_max: 0
      };
    } else {
      this.comp_3 = object.comp_3;
    }
    if (!object.comp_4) {
      this.comp_4 = {
        name: '--',
        pp: 0,
        pp_max: 0
      };
    } else {
      this.comp_4 = object.comp_4;
    }
  }
}
