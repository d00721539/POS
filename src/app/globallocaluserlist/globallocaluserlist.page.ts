import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-globallocaluserlist',
  templateUrl: './globallocaluserlist.page.html',
  styleUrls: ['./globallocaluserlist.page.scss'],
})
export class GloballocaluserlistPage implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'accountDisabledStatus','businessName'];
  dataSource = new MatTableDataSource<any>();

  constructor(private httpService : DataService) {
    let url = environment.url + "/user/global";
    this.httpService.get(url).subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err=>{
      console.log(err);
    })
  }

  ngOnInit() {
  }
 @ViewChild(MatSort,null) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
