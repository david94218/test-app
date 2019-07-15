import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-define-folder',
  templateUrl: './user-define-folder.component.html',
  styleUrls: ['./user-define-folder.component.scss']
})
export class UserDefineFolderComponent implements OnInit {

  @Input() newFolderList;
  @Input() modalRef2;
  @Input() openedModalName;

  deleteNewFolder(name) {
    this.newFolderList.forEach( (i) => {
      if (i.folderName === name) {
        this.newFolderList.splice(this.newFolderList.indexOf(i), 1);
      }
    });
    this.modalRef2.hide();
  }

  constructor() { }

  ngOnInit() {
  }

}
