import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortable, MatSort } from '@angular/material';
import { Storage } from '@ionic/storage';

export interface PeriodicElement {
  id:number,
  barcodeNumber:string,
  name: string,
  isCheckedOut: string

}
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
 
  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'quantity'];
  dataSource = new MatTableDataSource<any>();
  public businessName;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private httpService:DataService,private storage:Storage) {
      this.storage.get("businessName").then(res=>{
        this.getAllProducts(res);
      })
      
    }
// to put next to the class fields of the component
    

  ngOnInit() {

  }
  getAllProducts(busValue){
    this.businessName = busValue
    let url="http://localhost:8080/product/business?businessName=" + this.businessName;
    console.log(url)
  this.httpService.get(url).subscribe(res=>{
    console.log(res);
    this.dataSource.data = res as [];
  },err => {
    console.log(err);
  })
  }
  @ViewChild(MatSort,null) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}

