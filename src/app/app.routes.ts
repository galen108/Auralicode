import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CapabilitiesComponent} from "./capabilities/capabilities.component";
import {ServicesComponent} from "./services/services.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./resume-cv/resume.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'capabilities', component: CapabilitiesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent}];
