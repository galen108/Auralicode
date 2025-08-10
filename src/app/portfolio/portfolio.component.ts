import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardFooter
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {}
