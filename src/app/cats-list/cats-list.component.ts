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
  ngOnInit(): void {
    this.imageService.getCats().subscribe((data) => {
      this.images = data;
    });
  }
}
