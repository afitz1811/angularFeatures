import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item = "";
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value : string) {
    this.newItemEvent.emit(value);
  }
}
