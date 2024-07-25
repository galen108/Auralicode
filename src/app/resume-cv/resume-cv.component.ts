import { Component } from '@angular/core';
import {PdfViewerModule} from "ng2-pdf-viewer";

@Component({
  selector: 'app-resume-cv',
  standalone: true,
  imports: [
    PdfViewerModule
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
