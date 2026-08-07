import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withHashLocation } from '@angular/router'; // withInMemoryScrolling
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Mindig ugorjon a tetejére navigáláskor
        anchorScrolling: 'enabled' // Engedélyezze a horgony (#faq) linkeket
      })
    ), provideClientHydration(), provideClientHydration()
  ]
};