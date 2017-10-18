import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer'

@Component({
  selector: 'app-sample02',
  templateUrl: './sample02.component.html',
  styleUrls: ['./sample02.component.css']
})
export class Sample02Component implements OnInit {

  customer:Customer;
  customers:Customer[];

  constructor() { 
    this.customer = {id:1, name:'John Smith', age: 30};
    this.customers = [{id:2, name:'Brian', age:19},
                      {id:3, name:'Gerrard', age:20}];
  }

  ngOnInit() {
  }

}
