import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first.component.html',
})
export class FirstComponent implements OnInit {
  constructor() {}


  ngOnInit(): void {
    console.log("asdasd")
  }
}
