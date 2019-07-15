import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: any[];
  imageIndex = 10;
  imagesFound = false;
  selector = '.main-panel';
  searching = false;
  searchQuery;
  @Input() selectedFolder: string;
  @Input() modalRef;
  constructor(private imageService: ImageService) { }

  searchImages(searchKey: string) {
    console.log(searchKey);
    this.searching = true;
    return this.imageService.getImage(searchKey).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    );
  }

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    this.images.forEach( (image, index) => {
      if (index < this.imageIndex) {
          image.show = true;
      }
    });
  }

  handleError(error) {
    console.log(error);
  }

  ngOnInit() {
    this.searchImages(this.selectedFolder);
    this.searchQuery = this.selectedFolder;
  }

  onScroll() {
    console.log('scrolled!!');
    this.imageIndex += 10;
    this.images.forEach( (image, index) => {
      if (index < this.imageIndex) {
          image.show = true;
      }
    });
  }

}
