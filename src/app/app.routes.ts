import { Routes } from '@angular/router';
import { counterPageComponent } from './pages/counter/counter';
import { homePageComponent } from './pages/home/home';
import { randjokesPageComponent } from './pages/randJokes/randJokes';

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
    path: 'jokes',
    component: randjokesPageComponent,
  }
];
