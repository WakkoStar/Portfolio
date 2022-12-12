import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-video',
  templateUrl: './project-video.component.html',
  styleUrls: ['../project/project.component.scss'],
})
export class ProjectVideoComponent implements OnInit {
  @Input() linkToVideo: string = '';
  @Input() imageUrl: string = '';
  constructor() {}

  ngOnInit(): void {}
}
