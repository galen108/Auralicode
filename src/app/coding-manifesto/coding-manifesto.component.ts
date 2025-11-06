import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-coding-manifesto',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardImage,
        RouterLink
    ],
  templateUrl: './coding-manifesto.component.html',
  styleUrl: './coding-manifesto.component.css'
})
export class CodingManifestoComponent {

}
