import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ServicesComponent } from './services/services';
import { ServicesCardsComponent } from './services-cards/services-cards';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesCardsComponent },  // 4 cards page
  { path: 'service-software', component: ServicesComponent, data: { service: 'software' } },
  { path: 'service-cloud', component: ServicesComponent, data: { service: 'cloud' } },
  { path: 'service-ai', component: ServicesComponent, data: { service: 'ai' } },
  { path: 'service-cyber', component: ServicesComponent, data: { service: 'cyber' } },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];