import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuditPageRange} from './DTO/audit-page-range.model';

@Injectable()
export class AuditService {

  constructor(private http: HttpClient) {}

  private auditUrl = '/audit';

  public getAuditByCriteria(auditPageRange: AuditPageRange) {
    return this.http.post(this.auditUrl, auditPageRange);
  }

  public getAuditListSize() {
    return this.http.get(this.auditUrl+'/count');
  }

}
