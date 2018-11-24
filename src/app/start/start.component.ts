import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  title = 'Angumon';
  private audio;

  constructor(public router: Router) { }

  ngOnInit() {
    console.log("Hello trainer !");
    this.audio = new Howl({
      src: ['assets/sound/start.mp3']
    });
    this.audio.play();
  }

  start(){
    this.audio.stop();
    this.router.navigate(['/battle']);
  }

}
