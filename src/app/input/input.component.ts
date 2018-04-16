import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]="title">
    <button>Save</button>
    <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = 'my title';

  constructor() {
    this.changeTitle('I love Angular');
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

}
