import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const URL = 'http://localhost:3000/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[]


  constructor(private http: HttpClient) { }

  addMember(user: User) {
    const obj = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
    this.http.post(URL, obj)
      .subscribe(res => console.log('Done'));
  }

  updateMember(user: User):Observable<any> {
    const obj = {
     // _id:user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
   return this.http.put(`${URL}/${user._id}`, obj).pipe(map(this.extractData),catchError(this.handleError));
  }

  getUsers(): Observable<any> {
    return this.http.get(URL, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getUser(id: string): Observable<any> {    
    return this.http.get(`${URL}/${id}`)
      .pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
