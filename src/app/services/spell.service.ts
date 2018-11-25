import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor() { }

  get(comp){
    let spell;
    switch (comp.name.toLowerCase()) {
      case 'vol': {
        spell = function (enemy, ally) {
          enemy.hp = Math.max(parseInt(enemy.hp) - 30,0);
          comp.pp--;
        };
        break;
      }
      case 'dracochoc': {
        spell = function (enemy, ally) {
          enemy.hp = Math.max(parseInt(enemy.hp) - 100,0);
          ally.hp =  Math.max(parseInt(ally.hp) - 20,0);
          comp.pp--;
        };
        break;
      }
      case 'colère': {
        spell = function (enemy, ally) {
          enemy.hp =  Math.max(parseInt(enemy.hp) - 70,0);
          comp.pp--;
        };
        break;
      }
      case 'soin': {
        spell = function (enemy, ally) {
          ally.hp = Math.min(parseInt(ally.hp) + 70, ally.base_hp);
          comp.pp--;
        };
        break;
      }
    }
    return spell;
  }
}
