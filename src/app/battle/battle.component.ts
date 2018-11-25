import {Component, Inject, OnInit} from '@angular/core';
import {Howl, Howler} from 'howler';
import {SpellService} from "../services/spell.service";
import {PokemonModel} from "../core/pokemon.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

enum Action {
  Menu = 0,
  Fight = 1,
  Pokemon = 2,
  Bag = 3,
  Run = 4,

}

export interface DialogData {
  message: string;
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
  enemy: PokemonModel;
  ally: PokemonModel;
  message = {
    battle_text: '',
    comp_1: 'FIGHT',
    comp_2: 'BAG',
    comp_3: 'POKéMON',
    comp_4: 'RUN',
    victory: '',
  };
  dialogRef: MatDialogRef<DialogOverview>;


  constructor(private spellService: SpellService, private dialog: MatDialog) {
  }

  ngOnInit() {
    console.log("BATTLE STARTED");
    this.audio = new Howl({
      src: ['assets/sound/battle.mp3']
    });
    this.start();
  }

  start() {
    this.audio.play();
    //TODO: Message System
    this.enemy = new PokemonModel({
      name: 'Zekrom',
      url: 'assets/images/Zekrom_XY.gif',
      stats: {
        hp: 200,
        lvl: 76,
        base_hp: 200,
        attack: 100,
        defense: 80,
        sp_attack: 85,
        sp_defense: 35,
        speed: 70,
      },
      comp_1: {
        name: 'Vol',
        pp: 15,
        pp_max: 15,
      },
      comp_2: {
        name: 'Soin',
        pp: 20,
        pp_max: 20,
      },
      comp_3: {
        name: 'Colère',
        pp: 20,
        pp_max: 20,
      },
      comp_4: {
        name: 'Dracochoc',
        pp: 10,
        pp_max: 10,
      },
    });

    this.ally = new PokemonModel({
      name: 'Rayquaza',
      url: 'assets/images/Rayquaza-back_XY.gif',
      stats: {
        hp: 200,
        lvl: 91,
        base_hp: 200,
        attack: 100,
        defense: 80,
        sp_attack: 85,
        sp_defense: 35,
        speed: 70,
      },
      comp_1: {
        name: 'Vol',
        pp: 15,
        pp_max: 15,
      },
      comp_2: {
        name: 'Soin',
        pp: 20,
        pp_max: 20,
      },
      comp_3: null,
      comp_4: null,
    });
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
          this.message.comp_1 = this.ally.comp_1.name;
          this.message.comp_2 = this.ally.comp_2.name;
          this.message.comp_3 = this.ally.comp_3.name;
          this.message.comp_4 = this.ally.comp_4.name;
          this.tree++;
          break;
        }
        case Action.Fight: {
          if (this.ally.comp_1.pp != 0) {
            let spell = this.spellService.get(this.ally.comp_1);
            spell(this.enemy, this.ally);
            this.endTurn();
            break;
          }
          this.showMessage("Not possible !");
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
          if (this.ally.comp_2.pp != 0) {
            let spell = this.spellService.get(this.ally.comp_2);
            spell(this.enemy, this.ally);
            this.endTurn();
            break;
          }
          this.showMessage("Not possible !");
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
          if (this.ally.comp_3.pp != 0) {
            let spell = this.spellService.get(this.ally.comp_3);
            spell(this.enemy, this.ally);
            this.endTurn();
            break;
          }
          this.showMessage("Not possible !");
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
          if (this.ally.comp_4.pp != 0) {
            let spell = this.spellService.get(this.ally.comp_4);
            spell(this.enemy, this.ally);
            this.endTurn();
            break;
          }
          this.showMessage("Not possible !");
          break;

        }
      }
    }
  }

  enemyTurn() {
    let random = this._getRandomInt(4);
    switch (random) {
      case 0: {
        let spell = this.spellService.get(this.enemy.comp_1);
        spell(this.ally, this.enemy);
        break;
      }
      case 1: {
        let spell = this.spellService.get(this.enemy.comp_2);
        spell(this.ally, this.enemy);
        break;
      }
      case 2: {
        let spell = this.spellService.get(this.enemy.comp_3);
        spell(this.ally, this.enemy);
        break;
      }
      case 3: {
        let spell = this.spellService.get(this.enemy.comp_4);
        spell(this.ally, this.enemy);
        break;
      }
    }

  }

  _isDead(monster): boolean {
    return monster.hp == 0;

  }

  endTurn() {
    console.log("End Turn");
    if (this._isDead(this.enemy)) {
      this.message.victory = 'YOU LOSE';
      return alert("YOU WIN");
    }
    if (this._isDead(this.ally)) {
      this.message.victory = 'YOU LOSE';
      return alert("YOU LOSE");
    }
    this.isMyTurn = false;
    this.message.comp_1 = '';
    this.message.comp_2 = '';
    this.message.comp_3 = '';
    this.message.comp_4 = '';
    this.tree = Action.Menu;
    console.log("Enemy Turn");
    this.enemyTurn();
    console.log("End Turn");
    if (this._isDead(this.enemy)) {
      return this.openDialog("YOU WIN");
    }
    if (this._isDead(this.ally)) {
      return this.openDialog("YOU LOSE");
    }
    console.log("Your Turn");
    this.message.comp_1 = 'FIGHT';
    this.message.comp_2 = 'BAG';
    this.message.comp_3 = 'POKéMON';
    this.message.comp_4 = 'RUN';
    this.isMyTurn = true;
  }

  openDialog(message: string): void {
    this.dialogRef = this.dialog.open(DialogOverview, {
      data: {
        message: message
      }
    });
    this.dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  _getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}

@Component({
  selector: 'dialog-message',
  templateUrl: 'dialog.html'
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onOk(): void {
    this.dialogRef.close();
  }

}
