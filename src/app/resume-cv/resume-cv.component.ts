import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-resume-cv',
  standalone: true,
  imports: [
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardImage,
                MatCardFooter,
                RouterLink
      ],
  templateUrl: './resume-cv.component.html',
  styleUrl: './resume-cv.component.css'
})
export class ResumeCvComponent {}
