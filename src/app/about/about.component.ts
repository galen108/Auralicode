import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardFooter} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardFooter,
                RouterLink
          ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}


