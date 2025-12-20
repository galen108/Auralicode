import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-robust-web-apps',
  standalone: true,
    imports: [
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardImage,
                MatCardFooter,
                RouterLink
            ],
  templateUrl: './robust-web-apps.component.html',
  styleUrl: './robust-web-apps.component.css'
})
export class RobustWebAppsComponent {}
