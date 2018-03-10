import { Component, OnInit } from '@angular/core';

class AboutMenuItem {
  constructor(public caption: string, public fragment: string) { }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  AboutMenuItems: AboutMenuItem[];

  constructor() { }

  ngOnInit() {
    this.AboutMenuItems = [
      { caption: 'Profile', fragment: 'about' },
      { caption: 'Summary', fragment: 'summary' },
      { caption: 'Experience', fragment: 'experience' },
      { caption: 'Skills', fragment: 'skills' },
      { caption: 'Education', fragment: 'education' },
    ];
  }

}
