import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample04',
  templateUrl: './sample04.component.html',
  styleUrls: ['./sample04.component.css']
})
export class Sample04Component implements OnInit {

  textToBeUpdated="";
  
  whatYouTyped:string = "";
  typedNumber:number = 0;

  // 

  constructor() { }

  doClickEvent(e, btnName){
    console.log("Event:"+e.type);
    console.log(e);
    alert( btnName+" button clicked");
  }

  updateText(e){
    this.textToBeUpdated = e.target.value;
  }

  // Sumission part
  userName:string = '';
  userNames:string[] = ['Brian', 'Gerrard', 'Eric'];

  onSubmit(){
    this.userNames.push(this.userName);
    this.userName='';
  }

  ngOnInit() {
  }

}
