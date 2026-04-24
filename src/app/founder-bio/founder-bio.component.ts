import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser';
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";
import { MatAnchor } from "@angular/material/button";


@Component({
    selector: 'app-founder-bio',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardFooter,
        MatAnchor
    ],
    templateUrl: './founder-bio.component.html',
    styleUrl: './founder-bio.component.css'
})
export class FounderBioComponent implements OnInit {
  public ariaCurrentWhenActive: boolean = true;
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('My Bio | Auralicode');
    this.metaService.updateTag({
      name: 'Founder Bio',
      content: 'View my professional B2B founder bio page.'
    });
  }
}


