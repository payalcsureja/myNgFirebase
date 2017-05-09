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
      // { caption: 'Skills', link: ['/skills'], fragment: null },
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
