import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
  withHashLocation // The "Silver Bullet" for CSR routing stability
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // 1. Ensures the Back Button returns the user to their previous scroll position
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      // 2. Provides smooth CSS transitions between routes (Native feel)
      withViewTransitions(),
      // 3. Forces the browser to handle routing via the URL hash (#)
      // This prevents 404s on refresh and ensures the back button always works in CSR
      withHashLocation()
    ),
    provideAnimationsAsync()
  ]
};
