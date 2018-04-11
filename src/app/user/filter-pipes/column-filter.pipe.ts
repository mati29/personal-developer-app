import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../user.model';
import {MatTableDataSource} from '@angular/material';

@Pipe({
  name: 'columnFilter'
})
export class ColumnFilterPipe implements PipeTransform {

  transform(value: MatTableDataSource<User>, filterString: string, field: string): any {
    if (filterString.length === 0) {
      return value;
    }
    let filterValue = new MatTableDataSource();
    filterValue.data = value.data.filter( (u: User) => u[field].startsWith(filterString));
    return filterValue;
  }

}
