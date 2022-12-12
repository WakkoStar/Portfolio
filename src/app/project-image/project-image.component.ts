import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styleUrls: ['../project/project.component.scss'],
})
export class ProjectImageComponent implements OnInit {
  @Input() imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
