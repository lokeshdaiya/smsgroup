import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  startDate;
  endDate;
  columns = ['city', 'start_date', 'end_date', 'price', 'status', 'color'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats() {
    this.http.get(`${environment.apiURL}/stats`)
    .subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.customFilterPredicate();
    })
  }

  applyFilter() {
    this.dataSource.filter = JSON.stringify({
      start_date: this.startDate,
      end_date: this.endDate
    })
  }


  clearFilter() {
    this.dataSource.filter = '';
    this.startDate = '';
    this.endDate = '';
  }

  customFilterPredicate()
  {
    const filterPredicate = function (data: any, filter: string): boolean {
      let searchString = JSON.parse(filter);
       const startDate = new Date(data.start_date);
       const endDate = new Date(data.end_date);
       const searchStartDate = new Date(searchString.start_date);
       const searchEndDate = new Date(searchString.end_date);
        return  startDate >= searchStartDate && endDate <= searchEndDate;
      }

    return filterPredicate;
  }

}
