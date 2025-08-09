import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardFooter
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}


