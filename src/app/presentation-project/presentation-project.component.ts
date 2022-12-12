import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Project, templateProject } from '../data/projects';

@Component({
  selector: 'app-presentation-project',
  templateUrl: './presentation-project.component.html',
  styleUrls: ['./presentation-project.component.scss'],
})
export class PresentationProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number = 0;

  projectClass = 'project';
  fadeDirection = 'fade-left';
  isReversed = false;

  constructor(private router: Router) {
    this.project = templateProject;
  }

  ngOnInit(): void {
    this.isReversed = this.index % 2 == 0;

    this.projectClass = this.isReversed ? 'project-reversed' : 'project';
    this.fadeDirection = this.isReversed ? 'fade-left' : 'fade-right';
  }

  goToNewScreen(url: string) {
    this.projectClass += this.isReversed
      ? ' slide-from-right-0'
      : ' slide-from-left-0';
    setTimeout(() => this.router.navigateByUrl(url), 200);
    //  //issue with aos
  }
}
