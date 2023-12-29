import { CUSTOM_ELEMENTS_SCHEMA,ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
register();


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],

};
