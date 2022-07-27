import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickCount : number = 0;
  clickCount2 :  number = 0;

  inputValue : string = "";

  tempRefVal = "";

  keyValue1 = "";
  keyValue2 = "";
  keyValue3 = "";
  keyValue4 = "";

  clickMe(){
    this.clickCount++;
  }

  handleInput(event : any){
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  tempRefInput(element : any){
    console.log(element);
    this.tempRefVal = element.value;
  }
}
