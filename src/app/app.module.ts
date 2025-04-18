import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidbareComponent } from './sidbare/sidbare.component';
import { SidminiComponent } from './sidmini/sidmini.component';
import { HomeComponent } from './home/home.component';
import { AboutemeComponent } from './abouteme/abouteme.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SidbareComponent,
    SidminiComponent,
    HomeComponent,
    AboutemeComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
