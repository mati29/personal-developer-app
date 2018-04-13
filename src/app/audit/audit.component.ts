import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {AuditService} from './audit.service';
import {Audit} from './audit.model';

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

  constructor(private auditService: AuditService) { console.log('constr');}

  ngOnInit() {
    this.searchByColumn(this.column);
  }

  searchByColumn(column: string) {
    this.column = column;
    this.auditService.getAuditByCriteria({limit: this.limit, column: this.column, page: this.page})
      .subscribe( (data: Audit[]) => {
        this.dataSources.data = data;
      });
  }

  onPaginateChange(event){
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.searchByColumn(this.column);
  }

}
