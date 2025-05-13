import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  loginUser(loginData: any): Observable<any> {
    const URL = "http://localhost:8080/user/login-user";
    return this.http.post(URL, loginData,{responseType :'json'});
  }

  registerUser(user: any): Observable<any> {
    const URL="http://localhost:8080/user/register-user";
    return this.http.post(URL, user, { responseType: 'text' });
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`http://localhost:8080/user/all-user`);
  }
  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`http://localhost:8080/user/single-user/${username}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`http://localhost:8080/user/update-user`, user, { responseType: 'text' });
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/user/delete-user/${username}`, { responseType: 'text' });
  }
}
