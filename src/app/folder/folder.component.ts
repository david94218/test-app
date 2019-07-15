import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  modalRef: BsModalRef;
  modalRef1: BsModalRef;
  modalRef2: BsModalRef;

  folders = [
    { id: 1, name: 'Cat' },
    { id: 2, name: 'Dog' },
    { id: 3, name: 'Elephant' }
  ];

  addedImageList = [];
  images = [];
  imageList1 = [];
  imageList2 = [];
  imageList3 = [];

  imageIndex = 10;

  newFolderName;
  newFolderList = [];
  imagesFound = false;

  selector = '.main-panel';
  searching = false;
  searchQuery;
  openedModalName;

  @Input() modeName: string;
  selectedFolder = '';

  selectFolder(template: TemplateRef<any>, selectedFolder) {
    this.selectedFolder = selectedFolder;
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'modal-lg' }));
  }

  openFolder(template: TemplateRef<any>, name) {
    this.openedModalName = name;
    this.modalRef2 = this.modalService.show(
      template
    );
  }

  constructor(private modalService: BsModalService, private imageService: ImageService) {}

  searchImages(searchKey: string) {
    if (this.modeName === 'Like Mode') {
      this.images = [];
      this.imageList1 = [];
      this.imageList2 = [];
      this.imageList3 = [];
    }
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
      if (image.likes > 1000) {
        this.imageList1.push(image);
      } else if (image.likes >= 500 && image.likes <= 1000) {
        this.imageList2.push(image);
      } else if (image.likes < 500) {
        this.imageList3.push(image);
      }
      if (index < this.imageIndex) {
          image.show = true;
      }
    });
  }

  handleError(error) {
    console.log(error);
  }

  ngOnInit() {
  }

  newFolder(template: TemplateRef<any>) {
    this.newFolderName = '';
    this.modalRef1 = this.modalService.show(
      template
    );
  }

  clearAddedList() {
    this.addedImageList = [];
    this.images.forEach( (i, index) => {
        i.added = false;
    });
  }
}
