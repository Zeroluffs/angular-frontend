import { Component } from '@angular/core';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css'],
})
export class CreateCatComponent {
  name: string = '';
  breed: string = '';
  age: number = 0;
  image: string = '';
  images: any[] = [];
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
  ) {}

  openModal(): void {
    this.http
      .get<any[]>('http://localhost:3000/images/favourites/')
      .subscribe((data) => {
        this.images = data;
        const dialogRef = this.dialog.open(ImageModalComponent, {
          data: { images: this.images },
        });
        dialogRef.afterClosed().subscribe((result) => {
          this.image = result;
          console.log(this.image);
          console.log('The dialog was closed');
        });
      });
  }

  createCat() {
    console.log(this.name, this.breed, this.age, this.image);
    this.http
      .post('http://localhost:3000/cats/newCat/add', {
        name: this.name,
        breed: this.breed,
        age: this.age,
        image: this.image,
      })
      .subscribe((data) => {
        this.router.navigate(['/cats']).then((r) => console.log(r));
      });
  }
}
