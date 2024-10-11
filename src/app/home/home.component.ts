import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
