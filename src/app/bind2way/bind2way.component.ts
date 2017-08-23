import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind2way',
  template: `
    <input [value]="test" (input)="onInput($event)" />
    Preview: {{ test }}
  `
})
export class Bind2wayComponent implements OnInit {

  constructor() { }

  test = 'Namma Bengaluru';

  onInput($event) {
    this.test = $event.target.value;
  }

  ngOnInit() {
  }
}
