import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projectClassName = 'project-wrapper slide-from-left-0';
  mainClassName = 'main slide-from-left-0';
  mainLinksClassName = 'main-links slide-from-top-0';
  mainProfileFrameClassName = 'main-profile-frame expand-frame-0';
  textsClassName = 'texts slide-from-bottom-0';

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.projectClassName = 'project-wrapper slide-from-left-100';
    }, 1);
    setTimeout(() => {
      this.mainClassName = 'main slide-from-left-100';
      this.mainProfileFrameClassName = 'main-profile-frame expand-frame-100';
    }, 500);
    setTimeout(() => {
      this.mainLinksClassName = 'main-links slide-from-top-100';
    }, 1000);
    setTimeout(() => {
      this.textsClassName = 'texts slide-from-bottom-100';
    }, 1200);
  }

  goToNewScreen(url: string) {
    setTimeout(() => {
      this.projectClassName = 'project-wrapper slide-from-right-0';
    }, 1);
    setTimeout(() => {
      this.mainClassName = 'main slide-from-left-0';
      this.mainProfileFrameClassName = 'main-profile-frame expand-frame-0';
      this.mainLinksClassName = 'main-links slide-from-left-0';
      this.textsClassName = 'texts slide-from-left-0';
    }, 100);
    setTimeout(() => {
      this.router.navigateByUrl(url);
    }, 600);
  }
}
