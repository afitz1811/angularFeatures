import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cssString : string = "purple size20";
  cssArray : string[] = ['green', 'size20'];
  cssObject : object = {'purple':true, 'size20': true};
  toggleOn : boolean = false;
}
