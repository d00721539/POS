import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-businessaccountlist',
  templateUrl: './businessaccountlist.page.html',
  styleUrls: ['./businessaccountlist.page.scss'],
})
export class BusinessaccountlistPage implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'role', 'businessName', 'accountDisabledStatus'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort,null) sort: MatSort

  constructor(private httpService : DataService) { 
    let url = environment.url + "/user/business";
    this.httpService.get(url).subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err=>{
      console.log(err);
    })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
  }
  @ViewChild(MatPaginator,null) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;

  }
}
