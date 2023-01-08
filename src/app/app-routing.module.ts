import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PrivacyUniversalisComponent } from './privacy/privacy-universalis/privacy-universalis.component';
import { PrivacySkateRiderComponent } from './privacy/privacy-skaterider/privacy-skaterider.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectComponent } from './project/project.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'project/:name', component: ProjectComponent },
  { path: 'download/:name', component: DownloadComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'privacy', component: PrivacySkateRiderComponent },
  { path: 'universalis/privacy', component: PrivacyUniversalisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
