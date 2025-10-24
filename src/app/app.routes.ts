import { Routes } from '@angular/router';
import { counterPageComponent } from './pages/counter/counter';
import { homePageComponent } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: homePageComponent,
  },
  {
    path: 'counter',
    component: counterPageComponent,
  }
];
