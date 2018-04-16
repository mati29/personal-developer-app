import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {AuditService} from './audit.service';
import {Audit} from './audit.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  displayedColumns = ['id', 'clas', 'method', 'timestamp', 'type', 'username'];
  dataSources = new MatTableDataSource();

  limit: number = 5;
  page: number = 0;
  column: string = 'id';
  reverse: boolean = true;
  lenght: number = 0;

  activationFilter: boolean = true;

  dataForTableChanges: Observable<any>;

  constructor(private auditService: AuditService) {}

  ngOnInit() {
    this.auditService.getAuditListSize()
      .subscribe( (length: number) => {this.lenght = length});
    this.search();
  }

  searchByColumn(column: string) {
    if(this.column === column)
      this.reverse = !this.reverse;
    this.column = column;
    this.search();
  }

  search(){
    this.dataForTableChanges = this.auditService.getAuditByCriteria({limit: this.limit, column: this.column, page: this.page, reverse: this.reverse});
    this.dataForTableChanges
      .subscribe( (data: Audit[]) => {
        this.dataSources.data = data;
      });
  }

  onPaginateChange(event){
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.search();
  }

}
