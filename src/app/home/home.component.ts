import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
                MatIconModule,
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardImage,
                MatCardFooter,
                RouterLink
            ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
