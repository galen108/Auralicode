import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-enterprise-innovation',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardFooter,
        MatCardHeader
    ],
  templateUrl: './enterprise-innovation.component.html',
  styleUrl: './enterprise-innovation.component.css'
})
export class EnterpriseInnovationComponent {

}
