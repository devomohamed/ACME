import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'moviedetails/:id', loadChildren: () => import('./modules/movie-details/movie-details.module').then(m => m.MovieDetailsModule) },
  { path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'tv', loadChildren: () => import('./modules/tv/tv.module').then(m => m.TvModule) },
  { path: 'people', loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule) },
  { path: 'persondetails/:id', loadChildren: () => import('./modules/persondetails/persondetails.module').then(m => m.PersondetailsModule) },
  { path: 'tvdetails/:id', loadChildren: () => import('./modules/tv-details/tv-details.module').then(m => m.TvDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
