import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.page.html',
  styleUrls: ['./userdelete.page.scss'],
})
export class UserdeletePage implements OnInit {
  public id;
  public businessName;
  constructor(private httpService : DataService,private storage:Storage) { this.storage.get("businessName").then(res=>this.businessName=res)}

  ngOnInit() {
  }
  
  deleteUser(){
    if(!this.id){
      alert("Id can not be empty!");
      return;
    }else if(!this.httpService.isInt(this.id)){
      alert("Id must be a number");
      return;
    }

    let url = environment.url + "/user/deletelocal?id=" + this.id + "&role=local" + "&businessName=" + this.businessName;
    this.httpService.delete(url).subscribe(res=>{
      console.log(res);
      alert("User has been deleted!")
    },err=>{
      console.log(err);
      alert("User with that Id does not exist!");
    })
  }
}
