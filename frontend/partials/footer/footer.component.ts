import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(){ }

  ngOnInit(): void {
  }
 
  customOptions: any = {
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    navSpeed: 700,
    margin:15,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      700: {
        items: 3
      },
      900: {
        items: 4
      }
    },
    nav: true
  }
  images = [
    {
      imageSrc:
      'https://foodfood.b-cdn.net/images/0dUzcShealth-tips-19.png',
      imageAlt: 'item1',
      
    },
    {
      imageSrc:
        'https://foodfood.b-cdn.net/images/L5S4lQ6.png',
      imageAlt: 'item2',
    },
    {
      imageSrc:
        'https://foodfood.b-cdn.net/images/h0NjJH7.png',
      imageAlt: 'item1',
    },
    {
      imageSrc:
        'https://foodfood.b-cdn.net/images/KqfVDb13.png',
      imageAlt: 'item2',
    },
  ]
}
  


