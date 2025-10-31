import { Routes } from '@angular/router';
import { counterPageComponent } from './pages/counter/counter';
import { homePageComponent } from './pages/home/home';
import { getAgeComponent } from './pages/getAge/getAge';
import { randjokesPageComponent } from './pages/randJokes/randJokes';
import { formValidationPageComponent } from './pages/formValidation/formValidation';

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
  },
  {
    path:'getage',
    component: getAgeComponent,
  },
  {
    path: 'valid-form',
    component: formValidationPageComponent,
  },
];
