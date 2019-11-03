import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {
  public obj = {
    "barcodeNumber" : "",
    "name" :  "",
    "isCheckedOut" : "",
    "quantity" : ""
    }
    public productName;o
    public barcodeNumber;
    public isCheckedOut = false;
    public quantity;
    public businessName;
    constructor(private httpService: DataService, private storage: Storage) {      this.storage.get("businessName").then(val=>this.businessName=val);
  }

    ngOnInit() {
    }
    AddProduct(){
      
      let url = "http://localhost:8080/product"
      let obj = {
        "barcodeNumber" : this.barcodeNumber,
        "name" :  this.productName,
        "isCheckedOut" : false,
        "quantity" : this.quantity,
        "businessName" : this.businessName
        }
      this.httpService.post(url,obj).subscribe(res=>{
          console.log(res);
          alert("succesfully added!");
        }, err =>{
          console.log(err);
          alert("error");
        })
    }
  }

