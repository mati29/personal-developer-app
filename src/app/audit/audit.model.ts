export class Audit {
  id: number;
  clas: string;
  method: string;
  timestamp: string;
  type: string;
  username: string;

 constructor(audit?: Audit) {
    if(audit !== undefined) {
      this.username = audit.username;
      this.type = audit.type;
      this.timestamp = audit.timestamp;
      this.clas = audit.clas;
      this.method = audit.method;
      this.id = audit.id;
    }
  };
}
