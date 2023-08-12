import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCatsService {
  constructor(private http: HttpClient) {}

  getCats(): Observable<any> {
    return this.http.get('http://localhost:3000/cats');
  }

  deleteCat(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/cats/${id}`);
  }
}
