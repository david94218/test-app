import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from '../images/images.component';
import { ImageService } from '../shared/image.service';

@NgModule({
  declarations: [
    ImagesComponent],
  imports: [
    CommonModule
  ],
  providers: [ImageService]
})
export class ImagesModule { }
