import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: ['./data-parent.component.css']
})
export class DataParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentItem = "Television";

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem : string){
    this.items.push(newItem);
  }
}
