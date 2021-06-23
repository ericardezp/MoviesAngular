import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenreIndexComponent } from './genres/genre-index/genre-index.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexCinemaComponent } from './cinemas/index-cinema/index-cinema.component';
import { CreateCinemaComponent } from './cinemas/create-cinema/create-cinema.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditCinemaComponent } from './cinemas/edit-cinema/edit-cinema.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { FilterMovieComponent } from './movies/filter-movie/filter-movie.component';
import { DetailsMovieComponent } from './movies/details-movie/details-movie.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'generos', component: GenreIndexComponent, canActivate: [AuthGuard] },
  { path: 'generos/crear', component: CreateGenreComponent, canActivate: [AuthGuard] },
  { path: 'generos/editar/:id', component: EditGenreComponent, canActivate: [AuthGuard] },
  { path: 'actores', component:  IndexActorComponent, canActivate: [AuthGuard]},
  { path: 'actores/crear', component: CreateActorComponent, canActivate: [AuthGuard] },
  { path: 'actores/editar/:id', component: EditActorComponent, canActivate: [AuthGuard] },
  { path: 'cines', component: IndexCinemaComponent, canActivate: [AuthGuard] },
  { path: 'cines/crear', component: CreateCinemaComponent, canActivate: [AuthGuard] },
  { path: 'cines/editar/:id', component: EditCinemaComponent, canActivate: [AuthGuard] },
  { path: 'peliculas/crear', component: CreateMovieComponent, canActivate: [AuthGuard] },
  { path: 'peliculas/editar/:id', component: EditMovieComponent, canActivate: [AuthGuard] },
  { path: 'peliculas/buscar', component: FilterMovieComponent },
  { path: 'peliculas/:id', component: DetailsMovieComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
