import {Component, OnInit} from '@angular/core';
import {Howl, Howler} from 'howler';
import {SpellService} from "../services/spell.service";
import {PokemonModel} from "../core/pokemon.model";

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
  private isMyTurn = true;
  enemy = new PokemonModel({
    name: 'Rayquaza',
    lvl: '100',
    url: 'assets/images/Rayquaza-back_XY.gif',
    hp: '200',
    _base_hp: '200',
    comp_1: 'Vol',
    comp_2: 'Soin',
    comp_3: 'Colère',
    comp_4: 'Dracochoc',
  });

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

  constructor(private spellService: SpellService) {
  }

  ngOnInit() {
    console.log("BATTLE STARTED");
    this.audio = new Howl({
      src: ['assets/sound/battle.mp3']
    });
    this.start();
  }

  start() {
    // this.audio.play();
    //TODO: Message System
    this.showMessage("The battle is starting !");

    this.showMessage("What will " + this.ally.name + " do ?");

  }

  showMessage(msg: string) {
    this.message.battle_text = msg;
  }


  doComp1() {
    if (this.isMyTurn) {
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
          this.showMessage(this.ally.name + " used " + this.ally.comp_1 + " !");
          spell(this.enemy, this.ally);
          this.endTurn();
          break;
        }
      }
    }
  }

  doComp2() {
    if (this.isMyTurn) {
      switch (this.tree) {
        case Action.Menu: {


          break;
        }
        case Action.Fight: {
          let spell = this.spellService.get(this.ally.comp_2);
          spell(this.enemy, this.ally);
          this.endTurn();
          break;
        }
      }
    }
  }

  doComp3() {
    if (this.isMyTurn) {
      switch (this.tree) {
        case Action.Menu: {


          break;
        }
        case Action.Fight: {
          let spell = this.spellService.get(this.ally.comp_3);
          spell(this.enemy, this.ally);
          this.endTurn();
          break;
        }
      }
    }
  }

  doComp4() {
    if (this.isMyTurn) {
      switch (this.tree) {
        case Action.Menu: {


          break;
        }
        case Action.Fight: {
          let spell = this.spellService.get(this.ally.comp_4);
          spell(this.enemy, this.ally);
          this.endTurn();
          break;
        }
      }
    }
  }

  endTurn() {
    console.log("End Turn");
    this.isMyTurn = false;
    this.message.comp_1 = '';
    this.message.comp_2 = '';
    this.message.comp_3 = '';
    this.message.comp_4 = '';
    this.tree = Action.Menu;
    setTimeout(() => {
      this.message.comp_1 = 'FIGHT';
      this.message.comp_2 = 'BAG';
      this.message.comp_3 = 'POKéMON';
      this.message.comp_4 = 'RUN';
      this.isMyTurn = true;
    }, 3000)
  }
}
