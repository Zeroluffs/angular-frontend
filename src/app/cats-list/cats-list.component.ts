import { Component, OnInit } from '@angular/core';
import { FavImagesService } from '../fav-images.service';
import { GetCatsService } from '../get-cats.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css'],
})
export class CatsListComponent implements OnInit {
  images: any[] = [];
  constructor(
    private imageService: GetCatsService,
    private router: Router,
  ) {}
  goCreate(): void {
    // Use the navigate method to navigate to another route
    this.router.navigate(['/create']).then((r) => console.log(r));
  }
  delete(id: string) {
    this.imageService.deleteCat(id).subscribe((data) => {
      this.images = this.images.filter((image) => image._id !== id);
    });
  }
  edit(image: any) {
    const queryParams = {
      _id: image._id,
      name: image.name,
      breed: image.breed,
      age: image.age,
      image: image.image,
    };
    this.router.navigate(['/edit'], { queryParams });
  }

  ngOnInit(): void {
    this.imageService.getCats().subscribe((data) => {
      this.images = data;
    });
  }
}
