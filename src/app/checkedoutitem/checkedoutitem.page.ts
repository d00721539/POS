import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-checkedoutitem',
  templateUrl: './checkedoutitem.page.html',
  styleUrls: ['./checkedoutitem.page.scss'],
})
export class CheckedoutitemPage implements OnInit {
  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'isCheckedOut','quantity','email','date'];
  dataSource = new MatTableDataSource<any>();
  pipe: DatePipe;

  

  constructor(private httpService:DataService,private storage:Storage) {
    this.storage.get("userEmail").then(res=>this.getcheckOuts(res));

   }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatSort,null) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
getcheckOuts(email){
  this.httpService.get("http://localhost:8080/checkout?email=" + email).subscribe(res=>{
    console.log(res);
    this.dataSource.data = res as [];
  },err => {
    console.log(err);
  })
}
  ngOnInit() {

  }


}