import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-enterprise-web',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardFooter,
        MatCardHeader
    ],
  templateUrl: './enterprise-web.component.html',
  styleUrl: './enterprise-web.component.css'
})
export class EnterpriseWebComponent {

}
