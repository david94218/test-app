import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-album-mode-list',
  templateUrl: './album-mode-list.component.html',
  styleUrls: ['./album-mode-list.component.scss']
})
export class AlbumModeListComponent implements OnInit {

  @Input() addedImageList;
  @Input() images;
  @Input() imageIndex;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  onScroll() {
    this.imageIndex += 10;
    this.images.forEach( (image, index) => {
      if (index < this.imageIndex) {
          image.show = true;
      }
    });
    console.log(this.images);
  }

  addAndRemove(image, status) {
    if (status === 'add') {
      this.addedImageList.push(image);
      this.images.forEach( (i, index) => {
        if (i === image) {
          i.added = true;
        }
      });
    } else {
      this.addedImageList.forEach( (i) => {
        if (i === image) {
          this.addedImageList.splice(this.addedImageList.indexOf(i), 1);
        }
      });
      this.images.forEach( (i, index) => {
        if (i === image) {
          i.added = false;
        }
      });
    }
    console.log(this.addedImageList);
  }

}
