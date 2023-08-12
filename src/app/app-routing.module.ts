import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { CatsListComponent } from './cats-list/cats-list.component';

const routes: Routes = [
  {
    path: '',
    component: ImageGalleryComponent,
  },
  {
    path: 'cats',
    component: CatsListComponent,
  },
  {
    path: 'create',
    component: CreateCatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
