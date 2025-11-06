import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CodingManifestoComponent} from "./coding-manifesto/coding-manifesto.component";
import {CapabilitiesComponent} from "./capabilities/capabilities.component";
import {ServicesComponent} from "./services/services.component";
import {WebFoundationsComponent} from "./web-foundations/web-foundations.component";
import {WebApplicationsComponent} from "./web-applications/web-applications.component";
import {EnterpriseWebComponent} from "./enterprise-web/enterprise-web.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./resume-cv/resume.component";
import {ContactComponent} from "./contact/contact.component";



export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'coding-manifesto', component: CodingManifestoComponent},
  {path: 'capabilities', component: CapabilitiesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'web-foundations', component: WebFoundationsComponent},
  {path: 'web-applications', component: WebApplicationsComponent},
  {path: 'enterprise-web', component: EnterpriseWebComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent}];
