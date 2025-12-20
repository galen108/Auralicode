import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-web-foundations',
  standalone: true,
  imports: [
              MatCard,
              MatCardHeader,
              MatCardContent,
              MatCardImage,
              MatCardFooter,
              RouterLink
          ],
  templateUrl: './web-foundations.component.html',
  styleUrl: './web-foundations.component.css'
})
export class WebFoundationsComponent {}
