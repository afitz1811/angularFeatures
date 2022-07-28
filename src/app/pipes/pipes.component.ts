import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDate : Date = new Date();
  msg : string = "Angular Slice Pipe Example"
  num : number = 9542.14554;
  per : number = .7414;
  curr : number = 175;

}
