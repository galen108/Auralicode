import { ApplicationConfig, PLATFORM_ID, Inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // We keep these, but the 'Hydration' will now
    // safely ignore the server-side 'window' calls
    provideAnimations(),
    provideClientHydration()
  ]
};
