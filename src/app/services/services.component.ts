import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatExpansionPanel,  MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from "@angular/material/expansion";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatListItem} from "@angular/material/list";
import {WebFoundationsComponent} from "../web-foundations/web-foundations.component";
import {WebApplicationsComponent} from "../web-applications/web-applications.component";
import {RobustWebAppsComponent} from "../robust-web-apps/robust-web-apps.component";
import {EnterpriseGradeComponent} from "../enterprise-grade/enterprise-grade.component";


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
                    MatCard,
                    MatCardHeader,
                    MatCardContent,
                    MatExpansionPanel,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    PdfViewerModule,
                    MatCardFooter,
                    RouterLink,
                    MatListItem,
                    RouterLinkActive,
                    WebFoundationsComponent,
                    WebApplicationsComponent,
                    RobustWebAppsComponent,
                    EnterpriseGradeComponent
            ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {}
