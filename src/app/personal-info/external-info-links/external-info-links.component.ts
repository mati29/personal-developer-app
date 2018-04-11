import { Component, OnInit } from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-external-info-links',
  templateUrl: './external-info-links.component.html',
  styleUrls: ['./external-info-links.component.css']
})
export class ExternalInfoLinksComponent implements OnInit {

  columnNum: number;



  constructor(media: ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        if(change.mqAlias == 'xs'){
          this.columnNum = 2;
        }
        else if(change.mqAlias == 'sm'){
          this.columnNum = 4;
        }
        else{
          this.columnNum = 8;
        }
      });
  }

  openLink(link: string) {
    console.log(link);
    window.open( decodeURIComponent(link), "_blank");
  }


  ngOnInit() {
  }

}
