import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent implements OnInit {
  @Output() output: EventEmitter<string> = new EventEmitter();
  modeName: string;
  constructor() {
    this.modeName = 'Album Mode';
  }

  ngOnInit() {
    this.output.emit(this.modeName);
  }
  switchMode() {
    if (this.modeName === 'Album Mode') {
      this.modeName = 'Like Mode';
    } else if (this.modeName === 'Like Mode') {
      this.modeName = 'Album Mode';
    }

    this.output.emit(this.modeName);
  }
}
