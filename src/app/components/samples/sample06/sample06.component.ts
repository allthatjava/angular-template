import { Component, OnInit } from '@angular/core';
import { Service02Service } from '../../../services/samples/service02/service02.service';

@Component({
  selector: 'app-sample06',
  templateUrl: './sample06.component.html'
})
export class Sample06Component {

  users:any[];
  user = { id:'', name:'', email:''};
  isEdited:boolean = false;

  constructor(public service02:Service02Service) { 

    this.service02.getUsers().subscribe( users => {
      // console.log(users);
      this.users = users;
    });
  }

  onSubmit(isEdit){
    console.log("this.user--->"+this.user.name);

    if(isEdit){
      this.service02.updateUser(this.user).subscribe(user=>{
        for(let i =0; i < this.users.length; i++){
          if( this.users[i].id == this.user.id)
              this.users.splice(i,1);
        }

        this.users.unshift(this.user);
      });
    }else{
      this.service02.addUser(this.user).subscribe(user=>{
        console.log(user);
        this.users.unshift(user);
      });
    }
  }
  
  onDelete(id){
    this.service02.deleteUser(id).subscribe(res=>{
      for(let i =0; i < this.users.length; i++){
        if( this.users[i].id == id)
            this.users.splice(i,1);
      }
    });
  }

  onEdit(user){
    this.isEdited=true;
    this.user=user;
  }

}
