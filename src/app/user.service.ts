import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, userData);
  }
}
