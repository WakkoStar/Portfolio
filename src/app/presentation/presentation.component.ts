import { Component, OnInit } from '@angular/core';
import { Project, projects } from '../data/projects';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  projects: Project[] = projects;
  constructor() {}

  ngOnInit(): void {}
}
