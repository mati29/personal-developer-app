import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  postFile()/*: Observable<boolean>*/ {
    const endpoint = '/files/read';
    let formData: FormData = new FormData();
    formData.set('file', this.fileToUpload, this.fileToUpload.name);
    console.log(formData.get('file'));
    return this.http
      .post(endpoint, formData)
      .map((data: FormData) => {
        console.log(data);
        return true;
      })
      .subscribe( (done: boolean) => {
        console.log(done);
      });
  }

}
