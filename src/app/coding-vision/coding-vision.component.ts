import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-coding-vision',
  standalone: true,
    imports: [
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardImage,
                MatCardFooter,
                RouterLink
            ],
  templateUrl: './coding-vision.component.html',
  styleUrl: './coding-vision.component.css'
})
export class CodingVisionComponent {}
