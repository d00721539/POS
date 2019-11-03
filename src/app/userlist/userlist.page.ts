import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
import { MatSort } from '@angular/material';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'accountDisabledStatus'];
  dataSource = new MatTableDataSource<any>();
  public businessName;
  constructor(private httpService : DataService,private storage:Storage) { 
    this.storage.get("businessName").then(res=>{this.businessName=res;
      let url = environment.url + "/user/local?role=local&businessName=" +res;
      this.httpService.get(url).subscribe(res=>{
        console.log(res);
        this.dataSource.data = res as [];
      },err=>{
        console.log(err);
      })})

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
  } 
 @ViewChild(MatSort,null) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
