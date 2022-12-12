import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Aos from 'aos';
import {
  Project,
  ProjectContent,
  projects,
  templateProject,
} from '../data/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  project: Project = templateProject;
  projectClassName = 'main fade-0';

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.setHistoryScrollRestoration('manual');

    setTimeout(() => {
      document.getElementById('app')?.scrollIntoView();
    }, 50);
    setTimeout(() => {
      Aos.refresh();
    }, 500);

    setTimeout(() => {
      this.projectClassName = 'main fade-100';
    }, 1);

    this.route.params.subscribe((params) => {
      const projectName: string = params['name'];

      const existingProject = projects.find(
        ({ name }) => name.toLowerCase() == projectName
      );

      this.project = existingProject || templateProject;
    });
  }

  isTextIndexIsPair(
    contents: ProjectContent[],
    currentContent: ProjectContent
  ): boolean {
    const textContents = contents.filter(({ type }) => type == 'text');

    const textIndex = textContents.indexOf(currentContent);

    return textIndex % 2 == 0;
  }
}
