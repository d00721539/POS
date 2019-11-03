import { DataService } from '../data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatSort } from '@angular/material';
@Component({
  selector: 'app-globalcheckedoutlist',
  templateUrl: './globalcheckedoutlist.page.html',
  styleUrls: ['./globalcheckedoutlist.page.scss'],
})
export class GlobalcheckedoutlistPage implements OnInit {

  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'isCheckedOut','quantity','email','date','businessName'];
  dataSource = new MatTableDataSource<any>();
  pipe: DatePipe;



  constructor(private httpService:DataService) {

   }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatSort,null) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.httpService.get("http://localhost:8080/checkout").subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err => {
      console.log(err);
    })
  }

}
