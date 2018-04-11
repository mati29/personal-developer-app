import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PoemService} from '../poem-service/poem-service';

@Component({
  selector: 'app-poem-display',
  templateUrl: './poem-display.component.html',
  styleUrls: ['./poem-display.component.css']
})
export class PoemDisplayComponent implements OnInit {

  poemName: string;
  poemData: string;

  constructor(private route: ActivatedRoute, private poemService: PoemService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.poemName = params['name'];
        this.poemService.getPoem(this.poemName)
          .subscribe((poemData: string) => {
            this.poemData = poemData;
          });
      }
    );
  }

}
