import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatExpansionPanel,  MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from "@angular/material/expansion";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {RouterLink} from "@angular/router";


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
        RouterLink
    ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {}
