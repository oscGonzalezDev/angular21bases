import { Routes } from '@angular/router';
import { counterPageComponent } from './pages/counter/counter-page.component';
import { HeroPage } from './pages/hero/hero-page/hero-page';
import { DragonballPage } from './pages/dragonball/dragonball-page/dragonball-page';
import { DragonballSuper } from './pages/dragonball/dragonball-super/dragonball-super';

export const routes: Routes = [
    {
        path: '',
        component: counterPageComponent
    },
    {
        path: 'hero',
        component: HeroPage
    },
    {
        path: 'dragonball',
        component: DragonballPage
    },
    {
        path: 'dragonballsuper',
        component: DragonballSuper
    },
    {
        path: '**',
        redirectTo: ''
    }

];
