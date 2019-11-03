import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.page.html',
  styleUrls: ['./userupdate.page.scss'],
})
export class UserupdatePage implements OnInit {
  public id;
  public firstName;
  public lastName;
  public email;
  public password;
  public role;
  public accountStatus;
  public accountStatuses:any;
  public businessName;
  constructor(private httpService : DataService,private storage:Storage) {
    this.storage.get("businessName").then(res=>this.businessName = res);
    this.accountStatuses = [true,false];
   }

  ngOnInit() {
  }

  updateUser(){
    if(!this.id){
      alert("Id can not be empty!");
      return;
    } if(!this.httpService.isInt(this.id)){
      alert("Id must be a number!")
      return;
    }
     if(!this.firstName){
      alert("First name can not be empty!");
      return;
    } if(!this.lastName){
      alert("Last name can not be empty!");
      return;
    } if(!this.email){
      alert("Email can not be empty!");
      return;
    } if(!this.password){
      alert("Password can not be empty!");
      return;
    }else{
      
    }
    let obj = {
      "id" : this.id,
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "password" : this.password,
      "email" : this.email,
      "role" : "local",
      "businessName":this.businessName,
      "accountDisabledStatus" : this.accountStatus
    }
    let url = environment.url + "/user/update";

    console.log(obj);
    this.httpService.put(url,obj).subscribe(res=>{
      console.log(res);
      alert("User updated successfully!")
    },err=>{
      console.log(err);
      alert(err.error.message);
    })
  }
  getUserById(){
    if(!this.id){
      alert("Id can not be empty!");
      return;
    } if(!this.httpService.isInt(this.id)){
      alert("Id must be a number!")
      return;
    }
    let url = environment.url + "/user/admin/local/id?id=" + this.id + "&businessName="+this.businessName + "&role=local";
    this.httpService.get(url).subscribe(res=>{
      if(res === null){
        alert("No user found with given id!")
      }
      console.log(res);
      let obj = Object(res);
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.email = obj.email;
      this.password = obj.password;
      this.accountStatus = obj.accountDisabledStatus;
    },err=>{
      console.log(err);
      alert("An error has been occurred!")
    })
  }
}
