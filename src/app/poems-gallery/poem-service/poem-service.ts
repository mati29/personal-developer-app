import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class PoemService {

  private poemUrl = '/files/poems';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getPoemsName() {
    return this.http.get(this.poemUrl);
  }

  getPoem(name: string) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
    return this.http.get(this.poemUrl + '/' + name, {headers: headers, responseType: 'arraybuffer'})
      .map(
        (data: ArrayBuffer) => {
          const file = new Blob([data], {type: 'application/pdf'});
          const fileURL = URL.createObjectURL(file);
          return this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
        }
      );
  }

  uploadPoem(files: FileList) {
    const poemToUpload = files.item(0); //narazie jeden plik
    if (!this.validatePoemFile(poemToUpload.name)) {
      return null;
    }
    const formData: FormData = new FormData();
    formData.set('poem', poemToUpload, poemToUpload.name);
    return this.http.post(this.poemUrl + '/upload', formData, {responseType: 'text'});
  }

  private validatePoemFile(name: String) {
    const ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() === 'doc') {
      return true;
    } else {
      return false;
    }
  }

}
