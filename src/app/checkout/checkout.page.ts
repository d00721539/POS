import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public barcodeNumber;
  public myDate : Date = new Date();
  public num;
  public businessName;
  public email;
  constructor(private httpService:DataService,private barcodeScanner: BarcodeScanner, private storage:Storage) { 
    this.storage.get("businessName").then(res=>this.businessName = res);
    this.storage.get("userEmail").then(res=>this.email = res);

    this.num;
 }
  // new scan method
  scan() {
    this.barcodeScanner.scan().then(data => {
        // this is called when a barcode is found
        this.num = data;
      });      
  }
  ngOnInit() {}
  checkoutItem(){

    let url = "http://localhost:8080/product/checkout?id=" + this.num + "&businessName=" + this.businessName;
    this.httpService.put(url,"").subscribe(res=>{
      let response = Object(res);
      let checkoutobject = {
        "userEmail" : this.email,
	      "productid": response.id,
        "productBarcodeNumber": response.barcodeNumber,
        "productName": response.name,
        "productQuantity": response.quantity,
        "productIsCheckedOut": response.checkedOut,
        "checkedOutDate" : this.myDate,
        "businessName" : this.businessName
      }
      let checkouturl = environment.url + "/checkout";
      this.httpService.post(checkouturl, checkoutobject).subscribe(res=>{
            console.log(res);
            alert("Checkot successful!");
      },err=>{
          console.log(err);
      })
      console.log(res);

    },err=>{
      alert("Product given barcode could not be found!")
      console.log(err);
    })
  }
}
