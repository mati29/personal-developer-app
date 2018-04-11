import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  public routerTabs: {path: string, label: string}[] = [
    {path: "cv", label: "Curriculum Vitae"},
    {path: "links", label: "Links"},
    {path: "whoami", label: "Who 'm I?"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
