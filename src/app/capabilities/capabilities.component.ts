import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardFooter} from "@angular/material/card";
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from "@angular/material/expansion";

@Component({
  selector: 'app-capabilities',
  standalone: true,
  templateUrl: './capabilities.component.html',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatCardFooter
    ],
  styleUrl: './capabilities.component.css'
})
export class CapabilitiesComponent {

}
