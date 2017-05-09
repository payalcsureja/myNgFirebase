import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

class MenuItem {
  constructor(public caption: string, public link: any[], public fragment: string) { }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'About', link: ['/about'], fragment: null },
      // { caption: 'About', link: ['/about'], fragment: 'about' },
      // { caption: 'Summary', link: ['/about'], fragment: 'summary' },
      // { caption: 'Experience', link: ['/about'], fragment: 'experience' },
      // { caption: 'Skills', link: ['/about'], fragment: 'skills' },
      // { caption: 'Education', link: ['/about'], fragment: 'education' },
    ];

    // $('.page-scroll a').click(function(){
    //   //Animate
    //   $('html, body').stop().animate({
    //       scrollTop: $( $(this).attr('href') ).offset().top
    //   }, 400);
    //   return false;
    // });

  }

}
