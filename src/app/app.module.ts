import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PresentationProjectComponent } from './presentation-project/presentation-project.component';
import { ProjectComponent } from './project/project.component';
import { NavComponent } from './nav/nav.component';
import { ProjectVideoComponent } from './project-video/project-video.component';
import { ProjectTextComponent } from './project-text/project-text.component';
import { ProjectImageComponent } from './project-image/project-image.component';
import { HorizontalScrollDirective } from './horizontal-scroll.directive';
import { PrivacySkateRiderComponent } from './privacy/privacy-skaterider/privacy-skaterider.component';
import { PrivacyUniversalisComponent } from './privacy/privacy-universalis/privacy-universalis.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    HomeComponent,
    AboutComponent,
    PresentationProjectComponent,
    ProjectComponent,
    NavComponent,
    ProjectVideoComponent,
    ProjectTextComponent,
    ProjectImageComponent,
    HorizontalScrollDirective,
    PrivacySkateRiderComponent,
    PrivacyUniversalisComponent,
    DownloadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
