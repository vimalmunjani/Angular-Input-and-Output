import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'child',
  inputs :['count'],
  outputs:['buttonpressed'],
  template: 
  `
  <div class="counter">
    <button (click)="decrement()">Decrement</button> 
    <p>{{count}}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
    <h4 class="child-label">This is Child component </h4>
  </div>
`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //@Input()
  count: number;

  //@Output()
  buttonpressed = new EventEmitter();

  message : string;

  increment() {
    this.count++;
    this.checkSign();
    this.buttonpressed.emit(this.message);
  }

  decrement() {
    this.count--;
    this.checkSign();
    this.buttonpressed.emit(this.message);
  }

  reset(){

    this.count = 0;
    this.checkSign();
    this.buttonpressed.emit(this.message);
  }

  checkSign(){
    if(this.count==0){
      this.message = "Zero"
    }
    else if(this.count>0) {
   this.message ="Positive"
    }
    else{
      this.message = "Negative";
    }
  }
  


  constructor() { 
  
  }

  ngOnInit() {
    this.message = "Zero"
    this.buttonpressed.emit(this.message);
   
  }

}

