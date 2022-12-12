import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutClass = 'about slide-from-bottom-0';
  aboutImageClass = 'about-image slide-from-bottom-0';
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.aboutClass = 'about slide-from-bottom-100';
    }, 1);
    setTimeout(() => {
      this.aboutImageClass = 'about-image slide-from-bottom-100';
    }, 500);
  }
}
