import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { CreateCatComponent } from './create-cat/create-cat.component';

const routes: Routes = [
  {
    path: '',
    component: ImageGalleryComponent,
  },
  {
    path: 'create-cat',
    component: CreateCatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
