import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CodingVisionComponent} from "./coding-vision/coding-vision.component";
import {SystemCoherenceComponent} from "./system-coherence/system-coherence.component";
import {DeliberateTechComponent} from "./deliberate-tech/deliberate-tech.component";
import {CapabilitiesComponent} from "./capabilities/capabilities.component";
import {ServicesComponent} from "./services/services.component";
import {WebFoundationsComponent} from "./web-foundations/web-foundations.component";
import {RobustWebAppsComponent} from "./robust-web-apps/robust-web-apps.component";
import {WebApplicationsComponent} from "./web-applications/web-applications.component";
import {EnterpriseGradeComponent} from "./enterprise-grade/enterprise-grade.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./resume-cv/resume.component";
import {ContactComponent} from "./contact/contact.component";



export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'coding-vision', component: CodingVisionComponent},
  {path: 'system-coherence', component: SystemCoherenceComponent},
  {path: 'deliberate-tech', component: DeliberateTechComponent},
  {path: 'capabilities', component: CapabilitiesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'web-foundations', component: WebFoundationsComponent},
  {path: 'web-applications', component: WebApplicationsComponent},
  {path: 'robust-web-apps', component: RobustWebAppsComponent},
  {path: 'enterprise-grade', component: EnterpriseGradeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent}];
