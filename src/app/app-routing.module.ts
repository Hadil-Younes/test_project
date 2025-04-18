import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidbareComponent } from './sidbare/sidbare.component';
import { SidminiComponent } from './sidmini/sidmini.component';
import { HomeComponent } from './home/home.component';
import { AboutemeComponent } from './abouteme/abouteme.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: 'sidbar', component: SidbareComponent },
  { path: 'sidmini', component: SidminiComponent },
  { path: 'home', component: HomeComponent },
  { path: 'abouteme', component: AboutemeComponent },
  { path: 'resum', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
