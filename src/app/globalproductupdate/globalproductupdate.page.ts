import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-globalproductupdate',
  templateUrl: './globalproductupdate.page.html',
  styleUrls: ['./globalproductupdate.page.scss'],
})
export class GlobalproductupdatePage implements OnInit {
  public barcodeNumber;
  public quantity;
  public productName;
  public product;
  public id;
  public disableValue = false;
  public businessName;
  constructor(private httpService : DataService,private storage:Storage) { 
    this.storage.get("businessName").then(res=>this.businessName = res);
   // this.storage.get("userEmail").then(res=>this.email = res);

  }

  ngOnInit() {
  }
  getProductById(){
    if(!this.id){
      alert("Type id number!")
      return;
    }else if(!this.httpService.isInt(this.id)){
      alert("Id must be a number!")
      return;
    }
    let url = environment.url + "/product/global/id?id=" + this.id;
    console.log("url " + url);
    this.httpService.get(url).subscribe(res=>{
      if(res===null){
        alert("No such product found with the given id!")
      }
      this.product = res;
      let obj = Object(res);
      this.barcodeNumber = obj.barcodeNumber;
      this.quantity = obj.quantity;
      this.productName = obj.name;
      this.disableValue = true;
      this.storage.set("businessName",obj.businessName);
      console.log(this.product);
    },err=>{
      console.log(err);
      alert("No product found with given id!")
    })
    this.storage.get("businessName").then(res=>this.businessName = res);

  }
  updateProduct(){
    if(!this.id){
      alert("Id can not be empty!")
      return;
    }else if(!this.httpService.isInt(this.id)){
      alert("Id must be a number!")
      return;
    }else if(!this.barcodeNumber){
      alert("Barcode number can not be empty!")
      return;
    }else if(!this.quantity){
      alert("Quantity can not be empty!")
      return;
    }else if(!this.productName){
      alert("Product name can not be empty!")
      return;
    }else{

    }
    if(!this.httpService.isInt(this.quantity)){
      alert("Quantity must be number!");
      return;
    }else if(!this.httpService.isInt(this.barcodeNumber)){
      alert("Barcode number should only consist from numbers!");
      return;
    }
    else if(this.barcodeNumber.length > 32){
      alert("Barcode number can not have more than 32 digits!");
      return;
    }
    let obj = {
      "id" : this.id,
      "name":this.productName,
      "barcodeNumber" : this.barcodeNumber,
      "quantity" : this.quantity,
      "businessName":this.businessName
    }
    let url = environment.url +"/product/update";
    console.log("url: " + url);
    this.httpService.put(url,obj).subscribe(res=>{
      console.log(res);
      alert("Succesfully updated!")
    },err=>{
      console.log(err);
      alert(err.error.message)
    })
  }
}
