import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavImagesService {
  constructor(private http: HttpClient) {}

  getFavImages(): Observable<any> {
    return this.http.get('http://localhost:3000/images');
  }
}
