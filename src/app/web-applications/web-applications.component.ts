import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-web-applications',
  standalone: true,
       imports: [
                  MatCard,
                  MatCardHeader,
                  MatCardContent,
                  MatCardImage,
                  MatCardFooter,
                  RouterLink
                ],
  templateUrl: './web-applications.component.html',
  styleUrl: './web-applications.component.css'
})
export class WebApplicationsComponent {}

