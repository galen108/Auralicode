import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';

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
    ),
    // 3. Essential for SSR: Bridges the gap between server-rendered HTML and browser interactivity
    provideClientHydration(),
    provideAnimationsAsync()
  ]
};
