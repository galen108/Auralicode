import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-deliberate-tech',
  standalone: true,
    imports: [
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardImage,
                MatCardFooter,
                RouterLink
            ],
  templateUrl: './deliberate-tech.component.html',
  styleUrl: './deliberate-tech.component.css'
})
export class DeliberateTechComponent {}
