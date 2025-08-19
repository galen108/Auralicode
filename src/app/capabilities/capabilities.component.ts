import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardContent, MatCardFooter} from "@angular/material/card";
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from "@angular/material/expansion";
import {RouterLink} from "@angular/router";

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
        MatCardFooter,
        RouterLink
    ],
  styleUrl: './capabilities.component.css'
})
export class CapabilitiesComponent {}
