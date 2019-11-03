import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.page.html',
  styleUrls: ['./useradd.page.scss'],
})
export class UseraddPage implements OnInit {

  private firstName;
  private lastName;
  private email;
  private role;
  private password;
  public businessName;

  public accountStatuses:any;
  public accountStatus;
  constructor(private httpService : DataService,private storage:Storage) {
    this.accountStatuses = [true,false];
    this.storage.get("businessName").then(res=>this.businessName = res);
   }

  ngOnInit() {
  }

  addUser(){
    if(!this.firstName){
      alert("First name can not be empty!");
      return;
    }else if(!this.lastName){
      alert("Last name can not be empty!");
      return;
    }else if(!this.email){
      alert("Email can not be empty!");
      return;
    }else if(!this.password){
      alert("Password can not be empty!");
      return;
    }else{

    }

    let obj = {
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "email" : this.email,
      "role" : "local",
      "password" : this.password,
      "accountDisabledStatus" : this.accountStatus,
      "businessName" : this.businessName
    }
    let url = environment.url + "/user/register";
    this.httpService.post(url,obj).subscribe(res=>{
        console.log(res);
        alert("User has been added!")
    },err=>{
        console.log(err);
        alert(err.error.message);
    })

  }

}
