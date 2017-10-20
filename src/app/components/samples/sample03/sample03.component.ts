import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample03',
  templateUrl: './sample03.component.html',
  styleUrls: ['./sample03.component.css']
})
export class Sample03Component implements OnInit {
  
  isError = true;
  isSimpleStyle = false;


  // Can apply multiple classes into one TypeScript variable in JSON format
  ngSimpleClass={
    myStyle: true,        // Style class 'myStyle' must be applied
    simpleStyle: false    // Style class 'simpleStyle' must NOT be applied
  }

  ngSimpleStyle={
    'font-size':'25px',
    'color': this.isError ? 'red' : 'blue'
  }

  constructor() { }

  ngOnInit() {
  }

}
