import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  private currentUserNameSubject: BehaviorSubject<string>;
  public currentUserName: Observable<string>;

  constructor(private router: Router, private http: HttpClient) {
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

  getGreeting(name: string) {

    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    const params = new HttpParams({fromString: 'name=' + name});
    return this.http.post<any>('https://putsreq.com/Vh0SxLnaRsqaKOBylGCF', body, {headers : headers, params : params});
  }
}
