import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  private currentUserNameSubject: BehaviorSubject<string>;
  public currentUserName: Observable<string>;

  constructor(private router: Router) {
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
    this.router.navigate(['/']);
  }
}
