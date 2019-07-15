import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-mode-list',
  templateUrl: './like-mode-list.component.html',
  styleUrls: ['./like-mode-list.component.scss']
})
export class LikeModeListComponent implements OnInit {

  @Input() images;
  @Input() imageList1;
  @Input() imageList2;
  @Input() imageList3;

  imageList1Index = 10;
  imageList2Index = 10;
  imageList3Index = 10;

  constructor() { }

  ngOnInit() {
  }

  onScroll1() {
    this.imageList1Index += 10;
    this.imageList1.forEach( (image, index) => {
      if (index < this.imageList1Index) {
          image.show = true;
      }
    });
    console.log(this.imageList1);
  }
  onScroll2() {
    this.imageList2Index += 10;
    this.imageList2.forEach( (image, index) => {
      if (index < this.imageList2Index) {
          image.show = true;
      }
    });
    console.log(this.imageList2);
  }
  onScroll3() {
    this.imageList3Index += 10;
    this.imageList3.forEach( (image, index) => {
      if (index < this.imageList3Index) {
          image.show = true;
      }
    });
    console.log(this.imageList3);
  }

}
