import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {MatCard, MatCardHeader, MatCardContent, MatCardFooter} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-founder-bio',
  standalone: true,
  imports: [
                MatCard,
                MatCardHeader,
                MatCardContent,
                MatCardFooter,
                RouterLink,
                RouterLinkActive
          ],
  templateUrl: './founder-bio.component.html',
  styleUrl: './founder-bio.component.css'
})
export class FounderBioComponent implements OnInit {
  // 1. This uses the 'isPlatformBrowser' import
  isBrowser: boolean;

  // 2. This uses the 'Inject' and 'PLATFORM_ID' imports
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Any browser-only logic (like window, document, or analytics) goes here.
      // Even a simple console log counts as "using" the variable.
      console.log('Founder Bio loaded safely in the browser.');
    }
  }
}
