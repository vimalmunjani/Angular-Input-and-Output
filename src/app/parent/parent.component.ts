import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
  <div class="parent">
  <child 
  [count]="parentcount"
  (buttonpressed) = "showButtonPressed($event)"
  >
  </child>
  {{displaybutton}}
  <h4 class="child-label">This is Parent component </h4>
  </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentcount:number = 0;
  displaybutton :string ="";

  showButtonPressed(event){
this.displaybutton = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
