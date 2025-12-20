import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";
import {RouterLink} from "@angular/router";

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
