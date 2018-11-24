import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor() { }

  get(name: string){
    let spell;
    switch (name.toLowerCase()) {
      case 'vol': {
        spell = function (enemy, ally) {
          enemy.hp = Math.max(parseInt(enemy.hp) - 30,0);
        };
        break;
      }
      case 'dracochoc': {
        spell = function (enemy, ally) {
          enemy.hp = Math.max(parseInt(enemy.hp) - 100,0);
          ally.hp =  Math.max(parseInt(ally.hp) - 20,0);
        };
        break;
      }
      case 'colère': {
        spell = function (enemy, ally) {
          enemy.hp =  Math.max(parseInt(enemy.hp) - 70,0);
        };
        break;
      }
      case 'soin': {
        spell = function (enemy, ally) {
          ally.hp = Math.min(parseInt(ally.hp) + 50, ally._base_hp);
        };
        break;
      }
    }
    return spell;
  }
}
