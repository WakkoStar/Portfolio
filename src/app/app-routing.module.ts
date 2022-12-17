import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AssistanceUniversalisComponent } from './assistance-universalis/assistance-universalis.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'project/:name', component: ProjectComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'privacy', component: AssistanceComponent },
  { path: 'universalis/privacy', component: AssistanceUniversalisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
