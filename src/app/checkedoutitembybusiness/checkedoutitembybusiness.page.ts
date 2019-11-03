import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-checkedoutitembybusiness',
  templateUrl: './checkedoutitembybusiness.page.html',
  styleUrls: ['./checkedoutitembybusiness.page.scss'],
})
export class CheckedoutitembybusinessPage implements OnInit {
  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'isCheckedOut','quantity','email','date'];
  dataSource = new MatTableDataSource<any>();
  pipe: DatePipe;
  public businessName;
  constructor(private httpService:DataService,private storage:Storage) {this.storage.get("businessName").then(res=>this.getCheckedouts(res))}
getCheckedouts(email){
  this.httpService.get("http://localhost:8080/checkout/business?businessName=" + email).subscribe(res=>{
    console.log(res);
    this.dataSource.data = res as [];
  },err => {
    console.log(err);
  })
}
  ngOnInit() {

  }
 
  @ViewChild(MatSort,null) sort: MatSort
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}