import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  // declare var $: any; // http://deanmalone.net/post/using-jquery-from-angular2/

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
      // { caption: 'Portfolio', link: ['/portfolio'], fragment: null },
      // { caption: 'Skills', link: ['/skills'], fragment: null },
    ];

    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });

    // $('.page-scroll a').click(function(){
    //   //Animate
    //   $('html, body').stop().animate({
    //       scrollTop: $( $(this).attr('href') ).offset().top
    //   }, 400);
    //   return false;
    // });

  }

  // ngAfterViewChecked() {

  // }

}
