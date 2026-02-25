import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardFooter} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatListItem} from "@angular/material/list";
import { ViewEncapsulation } from '@angular/core';

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
  styleUrls: ['./founder-bio.component.css'],
  encapsulation: ViewEncapsulation.None // This kills the scoping
})
export class FounderBioComponent {}


