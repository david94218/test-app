import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderComponent } from '../folder/folder.component';
import { ImageService } from '../shared/image.service';

@NgModule({
  declarations: [FolderComponent],
  imports: [
    CommonModule
  ],
  providers: [ImageService]
})
export class FolderModule { }
