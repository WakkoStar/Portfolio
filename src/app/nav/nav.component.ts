import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() link: string = '';

  navClassName = 'nav slide-from-top-0';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.navClassName = 'nav slide-from-top-100';
    }, 100);
  }
}
