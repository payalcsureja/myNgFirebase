import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // $('.page-scroll a').click(function(){
    //   //Animate
    //   $('html, body').stop().animate({
    //       scrollTop: $( $(this).attr('href') ).offset().top
    //   }, 400);
    //   return false;
    // });

  }

}
