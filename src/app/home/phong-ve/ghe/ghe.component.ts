import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() sit;
  @Output() eventBook = new EventEmitter();
  trangThaiChon: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    let objSit = {
      trangThai: this.trangThaiChon,
      sit: this.sit
    }
    this.eventBook.emit(objSit);
  }
}
