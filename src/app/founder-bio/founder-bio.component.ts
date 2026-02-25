import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-founder-bio',
  standalone: true,
  imports: [
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardImage,
                MatCardFooter,
                RouterLink,
                RouterLinkActive
          ],
  templateUrl: './founder-bio.component.html',
  styleUrl: './founder-bio.component.css'
})
export class FounderBioComponent {}


