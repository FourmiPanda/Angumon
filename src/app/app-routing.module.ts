import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {BattleComponent} from "./battle/battle.component";
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'start', component: StartComponent, canActivate: [
      AuthGuard
    ] },
  { path: 'battle', component: BattleComponent , canActivate: [
      AuthGuard
    ]},
  { path: 'login', redirectTo: 'start', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
