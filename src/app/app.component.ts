import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'AngularBarcode';
  public isAdmin;
  public isGlobal;
  public isLocal;
  public role;
  public userName;
 
  ngOnInit(){
  }
  logout(){
    this.router.navigate([""]);
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private menuController: MenuController
  // tslint:disable-next-line: align
  ) {
    setInterval(() => {    //<<<---    using ()=> syntax
      this.storage.get("userName").then(val=>this.userName = val);
      this.storage.get("role").then(val=>this.role = val);
      if(this.role === "admin"){
        this.isAdmin = true;
        this.isGlobal = false;
        this.isLocal = false;
      }else if(this.role === "global"){
        this.isGlobal = true;
        this.isAdmin = false;
        this.isLocal = false;
      }else if (this.role === "local"){
        this.isLocal = true;
        this.isAdmin = false;
        this.isGlobal = false;
      }else{

      }
    }, 50);  
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openFirst(){
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }
  openEnd(){
    this.menuController.open('end');
  }
  openCustom(){
    this.menuController.enable(true,'custom');
    this.menuController.open('custom');
  }
}
