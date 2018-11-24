import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';
import {SpellService} from "../services/spell.service";

enum Action {
  Menu = 0,
  Fight = 1,
  Pokemon = 2,
  Bag = 3,
  Run = 4,

}

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  private audio;
  private tree = Action.Menu;

  enemy = {
    name: 'Zekrom',
    lvl: '100',
    url: 'assets/images/Zekrom_XY.gif',
    hp: '150',
    _base_hp: '150'

  };
  ally = {
    name: 'Rayquaza',
    lvl: '100',
    url: 'assets/images/Rayquaza-back_XY.gif',
    hp: '200',
    _base_hp: '200',
    comp_1: 'Vol',
    comp_2: 'Soin',
    comp_3: 'Colère',
    comp_4: 'Dracochoc',
  };
  message = {
    battle_text: '',
    comp_1: 'FIGHT',
    comp_2: 'BAG',
    comp_3: 'POKéMON',
    comp_4: 'RUN',
  };

  constructor(private spellService: SpellService) { }

  ngOnInit() {
    console.log("BATTLE STARTED");
    this.audio = new Howl({
      src: ['assets/sound/battle.mp3']
    });
    this.start();
  }

  start(){
    this.audio.play();
    this.message.battle_text = "The battle is starting !";
    setTimeout(() => {
      this.message.battle_text = "What will "+this.ally.name+" do ?";
    }, 3000);
  }

  doComp1(){
    switch (this.tree) {
      case Action.Menu: {
        this.message.comp_1 = this.ally.comp_1;
        this.message.comp_2 = this.ally.comp_2;
        this.message.comp_3 = this.ally.comp_3;
        this.message.comp_4 = this.ally.comp_4;
        this.tree++;
        break;
      }
      case Action.Fight: {
        let spell = this.spellService.get(this.ally.comp_1);
        spell(this.enemy, this.ally);
        break;
      }
    }


  }

  doComp2(){
    switch (this.tree) {
      case Action.Menu: {


        break;
      }
      case Action.Fight: {
        let spell = this.spellService.get(this.ally.comp_2);
        spell(this.enemy, this.ally);
        break;
      }
    }

  }

  doComp3(){
    switch (this.tree) {
      case Action.Menu: {


        break;
      }
      case Action.Fight: {
        let spell = this.spellService.get(this.ally.comp_3);
        spell(this.enemy, this.ally);
        break;
      }
    }

  }

  doComp4(){
    switch (this.tree) {
      case Action.Menu: {


        break;
      }
      case Action.Fight: {
        let spell = this.spellService.get(this.ally.comp_4);
        spell(this.enemy, this.ally);
        break;
      }
    }
  }
}
