import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Property Binding';
  isDisabled = true;

  evilText = 'Template <script>alert("You are hacked")</script> Syntax';

  text1="<b>Angular</b> in bold"
  text2="<p>First paragraph</p><p>Second paragraph</p>"

  itemImageUrl="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"

  string1 = "Hello";
  string2 = "There";

   colour = "red";
}
