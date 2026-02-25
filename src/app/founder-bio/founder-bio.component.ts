import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardFooter} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-founder-bio',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    RouterLink,
    MatListItem,
    RouterLinkActive
  ],
  templateUrl: './founder-bio.component.html',
  styleUrl: './founder-bio.component.css'
})
export class FounderBioComponent {}


