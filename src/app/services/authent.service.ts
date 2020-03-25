import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  private currentUserNameSubject: BehaviorSubject<string>;
  public currentUserName: Observable<string>;

  constructor() {
    this.currentUserNameSubject = new BehaviorSubject<string>(null);
    this.currentUserName = this.currentUserNameSubject.asObservable();
  }

  public isAuthenticated(): boolean {
    return this.currentUserNameSubject.value != null;
  }

  login(username: string, password: string) {

    this.currentUserNameSubject.next(username);
    return username;

  }

  logout() {
    this.currentUserNameSubject.next(null);
  }
}
