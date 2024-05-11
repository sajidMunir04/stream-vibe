import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviesAndShowsComponent } from './pages/movies-and-shows/movies-and-shows.component';
import { SupportComponent } from './pages/support/support.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

export const routes: Routes = [
    {path: '',component : HomepageComponent},
    {path: 'moviesAndShows', component: MoviesAndShowsComponent},
    {path: 'support', component: SupportComponent},
    {path: 'subscription', component: SubscriptionComponent}
];
