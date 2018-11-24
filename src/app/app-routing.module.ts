import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {BattleComponent} from "./battle/battle.component";

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: StartComponent },
  { path: 'battle', component: BattleComponent },
  { path: '**', redirectTo: 'start', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
