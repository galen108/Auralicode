import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-web-applications',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardFooter,
        MatCardHeader
    ],
  templateUrl: './web-applications.component.html',
  styleUrl: './web-applications.component.css'
})
export class WebApplicationsComponent {}
