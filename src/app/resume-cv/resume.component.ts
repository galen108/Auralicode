import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardFooter
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {}
