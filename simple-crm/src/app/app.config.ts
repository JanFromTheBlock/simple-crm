import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-dfc34","appId":"1:463085549604:web:717f978e54e6e26c0a40b1","storageBucket":"simple-crm-dfc34.appspot.com","apiKey":"AIzaSyAzPk7EPjgPwvMcbwFp1a36Zw90QFJcUto","authDomain":"simple-crm-dfc34.firebaseapp.com","messagingSenderId":"463085549604"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
