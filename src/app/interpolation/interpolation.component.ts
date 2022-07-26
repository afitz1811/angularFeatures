import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Interpolation";
  classColour = 'green';
  imageURL = "https://img.freepik.com/premium-photo/kitten-head-with-paw-up-peeking-blank-white-sign-placard-pet-kitten-curiously-peeking-white-background-tabby-baby-cat-showing-placard-template-long-web-banner-with-copy-space_221542-2279.jpg?w=1380";
  script ='<script>alert("You are hacked")</script>';
  div='<div>this is a div</div>';


  getTitle() : string {
    return this.title;
  }

  max(first: number, second: number) : number {
    return Math.max(first, second);
  }

}
