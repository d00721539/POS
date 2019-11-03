import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public password;
  public email;

  constructor(private httpService : DataService, private router : Router, private storage: Storage) {   
  }

  ngOnInit() {
  }
  submitLogin(){
    let userInfo = {
      "email" : this.email,
      "password" : this.password
    }
    let url = environment.login;
    this.httpService.post(url,userInfo).subscribe(res=>{
      let response = Object(res);
      this.storage.set("role",response.role);
      this.storage.set("userEmail",this.email);
      this.storage.set("userName",response.firstName);
      this.storage.set('currentUser',response.email);
      this.storage.set("businessName",response.businessName);
      console.log(res);
      console.log(this.storage.get("role"));
      this.router.navigate(["addproduct"]);
    },err=>{
      alert(err.error.message);
    })
  }
}
