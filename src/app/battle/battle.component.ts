import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  private audio;

  constructor() { }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = "assets/sound/battle.mp3";
    this.audio.load();
    this.audio.play();
  }

  playAudio(){
    this.audio.play();
  }
}
