import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CapabilitiesComponent} from "./capabilities/capabilities.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeCvComponent} from "./resume-cv/resume-cv.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'capabilities', component: CapabilitiesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume-cv', component: ResumeCvComponent}];
