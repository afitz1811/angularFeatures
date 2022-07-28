import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num : number = 0;
  num2 : number = 0;

  add(){
    this.num2++;
  }
  subtract(){
    this.num2--;
  }


  selectedValue = "One";
  items = [
    {name: 'One', val: 1},
    {name: 'Two', val: 2},
    {name: 'Three', val: 3},
    {name: 'Four', val: 4},
    {name: 'Five', val: 5}
  ]

  selectedValue2 = "One";
}

