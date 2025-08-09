import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardImage, MatCardFooter} from "@angular/material/card";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardImage,
        MatCardFooter
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {}
