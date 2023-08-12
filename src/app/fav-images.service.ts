import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './shared/api.constans';

@Injectable({
  providedIn: 'root',
})
export class FavImagesService {
  constructor(private http: HttpClient) {}

  getFavImages(): Observable<any> {
    return this.http.get(`${API_URL}images`);
  }
  addFavImage(image: string): Observable<any> {
    return this.http.post(`${API_URL}images/favourites/add`, {
      image_id: image,
    });
  }
}
