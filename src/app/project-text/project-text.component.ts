import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-text',
  templateUrl: './project-text.component.html',
  styleUrls: ['../project/project.component.scss'],
})
export class ProjectTextComponent implements OnInit {
  @Input() text = '';
  @Input() isReversed = false;
  projectTextClass = 'project-text';

  constructor() {}

  ngOnInit(): void {
    this.projectTextClass = this.isReversed
      ? 'project-text-reversed'
      : 'project-text';
  }
}
