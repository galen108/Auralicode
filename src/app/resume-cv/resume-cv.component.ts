import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from "@angular/material/expansion";
import {PdfViewerModule} from "ng2-pdf-viewer";


@Component({
  selector: 'app-resume-cv',
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
        MatCardFooter
    ],
  templateUrl: './resume-cv.component.html',
  styleUrl: './resume-cv.component.css'
})
export class ResumeCvComponent {
  private pdfComponent: any;

  pageRendered() {
      this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
    }
}
