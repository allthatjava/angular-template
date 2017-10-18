import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample01',
  templateUrl: './sample01.component.html',
  styleUrls: ['./sample01.component.css']
})

export class Sample01Component implements OnInit {

  name = 'John Doe';
  age = 35;
  person = {firstName:'Steve', lastName:'Smith'}

  constructor() { 
    console.log('Constructor ran...');
  }

  showAge(){
    return this.age;
  }

  ngOnInit() {
  }

}
