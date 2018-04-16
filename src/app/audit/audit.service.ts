import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuditPageRange} from './DTO/audit-page-range.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuditService {

  constructor(private http: HttpClient) {}

  private auditUrl = '/audit';

  public getAuditByCriteria(auditPageRange: AuditPageRange): Observable<any> {
    return this.http.post(this.auditUrl, auditPageRange);
  }

  public getAuditListSize() {
    return this.http.get(this.auditUrl+'/count');
  }

}
