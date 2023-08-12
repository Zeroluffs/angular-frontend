import { Component, OnInit } from '@angular/core';
import { FavImagesService } from '../fav-images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
})
export class ImageGalleryComponent implements OnInit {
  images: any[] = [];
  constructor(private imageService: FavImagesService) {}

  ngOnInit(): void {
    this.imageService.getFavImages().subscribe((data) => {
      this.images = data;
    });
  }
}
