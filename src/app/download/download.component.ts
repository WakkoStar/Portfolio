import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Project,
  ProjectContent,
  projects,
  templateProject,
} from '../data/projects';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  project: Project = templateProject;
  appleUrl = '';
  googleUrl = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectName: string = params['name'];

      const existingProject = projects.find(
        ({ name }) => name.toLowerCase() == projectName
      );

      this.project = existingProject || templateProject;

      this.appleUrl =
        this.project?.appDownload?.find((element) => element.type == 'Apple')
          ?.url || '';

      this.googleUrl =
        this.project?.appDownload?.find((element) => element.type == 'Google')
          ?.url || '';
    });
  }
}
