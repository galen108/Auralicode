import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component"
import {CodingVisionComponent} from "./coding-vision/coding-vision.component"
import {SystemCoherenceComponent} from "./system-coherence/system-coherence.component"
import {DeliberateTechComponent} from "./deliberate-tech/deliberate-tech.component"
import {CapabilitiesComponent} from "./capabilities/capabilities.component";
import {ServicesComponent} from "./services/services.component";
import {WebFoundationsComponent} from "./web-foundations/web-foundations.component"
import {WebApplicationsComponent} from "./web-applications/web-applications.component"
import {RobustWebAppsComponent} from "./robust-web-apps/robust-web-app.component"
import {EnterpriseGradeComponent} from "./enterprise-grade/enterprise-grade.component"
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./resume/resume.component"
import {ContactComponent} from "./contact/contact.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {PdfViewerModule} from "ng2-pdf-viewer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgOptimizedImage,
    HomeComponent,
    AboutComponent,
    CodingVisionComponent,
    SystemCoherenceComponent,
    DeliberateTechComponent,
    CapabilitiesComponent,
    ServicesComponent,
    WebFoundationsComponent,
    WebApplicationsComponent,
    RobustWebAppsComponent,
    EnterpriseGradeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    PdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  protected readonly PortfolioComponent = PortfolioComponent;
}
