import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './shared/api.constans';

@Injectable({
  providedIn: 'root',
})
export class GetCatsService {
  constructor(private http: HttpClient) {}

  getCats(): Observable<any> {
    return this.http.get(`${API_URL}cats`);
  }

  deleteCat(id: string): Observable<any> {
    return this.http.delete(`${API_URL}cats/${id}`);
  }
}
