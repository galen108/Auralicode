import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapabilitiesComponent {
  pageTitle = 'Capabilities';

  areas = [
    'Web applications and platforms',
    'Frontend architecture and UI systems',
    'Backend application logic',
    'Authentication and security',
    'Cloud deployment and operations',
    'System integration and boundaries',
    'Ongoing evolution and stewardship'
  ];
}
