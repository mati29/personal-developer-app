import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  private content: string;
  private renderPdf = false;

  ngOnInit() {
    const endpoint = '/files/get';
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
    this.http.get(endpoint, {headers: headers, responseType: 'arraybuffer'})
      .subscribe((data: ArrayBuffer) => {
        const file = new Blob([data], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        console.log(fileURL);
        this.content = fileURL;
        this.renderPdf = true;

    });
  }

  safeURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.content);
  }

}
