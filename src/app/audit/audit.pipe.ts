import {Pipe, PipeTransform} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Audit} from './audit.model';

@Pipe({
  name: 'auditPipe'
})
export class AuditPipe implements PipeTransform {

  transform(value: Audit[], filterActive: boolean): any {
    if (!filterActive || value === null) {
      return value;
    }
    let filterClass = new MatTableDataSource();
    value.forEach((a: Audit) => {
      filterClass.data.push(new Audit(a))
    });
    filterClass.data.forEach((a: Audit) => {
          a['clas'] = a['clas'].slice(a['clas'].lastIndexOf('.') + 1,a['clas'].indexOf('$'))
    });
    return filterClass;
  }

}
