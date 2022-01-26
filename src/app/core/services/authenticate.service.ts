import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from 'src/app/_models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('cuurentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log('3. triggered in authentication service to verify');
    return this.http.post<any>(`/users/authenticate`, { username, password }).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
    console.log('4. triggered in authentication service to confirm and set token');
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
