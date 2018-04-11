import { Component, OnInit } from '@angular/core';
import {PoemService} from './poem-service/poem-service';
import {AdminGuard} from '../auth/admin/admin.guard';

@Component({
  selector: 'app-poems-gallery',
  templateUrl: './poems-gallery.component.html',
  styleUrls: ['./poems-gallery.component.css']
})
export class PoemsGalleryComponent implements OnInit {

  private poemsName: string[];

  constructor(private poemService: PoemService, private adminGuard: AdminGuard) { }

  ngOnInit() {
    this.poemService.getPoemsName()
      .subscribe( (poemsName: string[]) => {
        this.poemsName = poemsName;
        console.log(poemsName);
      });
  }

  uploadPoem(files: FileList) {
    this.poemService.uploadPoem(files).subscribe(
      (newPoem: string) => {
        this.poemsName.push(newPoem);
      }
    );
  }

  adminUploadVisible(): boolean {
    return this.adminGuard.isAdminRole();
  }

}
