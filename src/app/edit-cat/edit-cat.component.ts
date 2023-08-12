import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { API_URL } from '../shared/api.constans';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css'],
})
export class EditCatComponent implements OnInit {
  _id: string = '';
  name: string = '';
  breed: string = '';
  age: number = 0;
  image: string = '';
  images: any[] = [];
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
  ) {}
  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      console.log('params', params);
      this.name = params['name'];
      this.breed = params['breed'];
      this.age = params['age'];
      this.image = params['image'];
      this._id = params['_id'];
    });
  }

  openModal(): void {
    this.http.get<any[]>(`${API_URL}images/favourites`).subscribe((data) => {
      this.images = data;
      const dialogRef = this.dialog.open(ImageModalComponent, {
        data: { images: this.images },
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.image = result;
      });
    });
  }
  editCat() {
    console.log(this.name, this.breed, this.age, this.image, this._id);
    this.http
      .patch(`${API_URL}cats/${this._id}`, {
        name: this.name,
        breed: this.breed,
        age: Number(this.age),
        image: this.image,
      })
      .subscribe((data) => {
        this.route.navigate(['/cats']).then((r) => console.log(r));
      });
  }
}
