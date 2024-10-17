import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="custom">
      home works!
    </h1>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
