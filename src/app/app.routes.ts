import { Routes } from '@angular/router';
import { counterPageComponent } from './pages/counter/counter';
import { homePageComponent } from './pages/home/home';
import { getAgeComponent } from './pages/getAge/getAge';

export const routes: Routes = [
  {
    path: '',
    component: homePageComponent,
  },
  {
    path: 'counter',
    component: counterPageComponent,
  },
  {
    path:'getage',
    component: getAgeComponent,
  }
];
