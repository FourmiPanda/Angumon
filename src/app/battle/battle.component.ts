import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  private audio;

  enemy = {
    name: 'Zekrom',
    lvl: '100',
    url: 'assets/images/Zekrom_XY.gif',
    hp: '100'

  };
  ally = {
    name: 'Rayquaza',
    lvl: '100',
    url: 'assets/images/Rayquaza-back_XY.gif',
    hp: '100',
    comp_1: '1',
    comp_2: '2',
    comp_3: '3',
    comp_4: '4',
  };
  message = {
    battle_text: '',
    comp_1: 'FIGHT',
    comp_2: 'BAG',
    comp_3: 'POKéMON',
    comp_4: 'RUN',
  };

  constructor() { }

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
    console.log("1");
  }

  doComp2(){

  }

  doComp3(){

  }

  doComp4(){

  }
}
