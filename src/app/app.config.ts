import { TitleStrategy } from '@angular/router';
import { SeoTitleStrategy } from './seo/seo-title.strategy';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // withInMemoryScrolling
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
    ), provideClientHydration(), { provide: TitleStrategy, useClass: SeoTitleStrategy }
  ]
};