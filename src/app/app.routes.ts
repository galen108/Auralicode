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
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'about',pathMatch: 'full',  component: AboutComponent},
  {path: 'capabilities', pathMatch: 'full', component: CapabilitiesComponent},
  {path: 'services', pathMatch: 'full', component: ServicesComponent},
  {path: 'portfolio', pathMatch: 'full', component: PortfolioComponent},
  {path: 'resume', pathMatch: 'full', component: ResumeComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent}];
