import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    CarrouselComponent,
    GalleryComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CarrouselComponent,
    GalleryComponent,
  ],

})
export class ComponenteModule { }
