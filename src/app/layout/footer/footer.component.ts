import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  currentYear: string;
  title: string;

  constructor() { }

  ngOnInit() {
    this.currentYear = moment().format('YYYY');
    this.title = 'PAYAL SUREJA';
  }

}
