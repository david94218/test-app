import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {

  @Input() modalRef1;
  @Input() addedImageList;
  @Input() newFolderList;
  @Input() newFolderName;

  add(): void {
    if (this.addedImageList && this.addedImageList.length > 0) {
      this.newFolderList.push({folderName: this.newFolderName, images: this.addedImageList});
    } else {
      this.newFolderList.push({folderName: this.newFolderName});
    }
    this.modalRef1.hide();
    console.log(this.newFolderList);
  }

  decline(): void {
    console.log('Declined!');
    this.modalRef1.hide();
  }

  constructor() { }

  ngOnInit() {
  }

}
