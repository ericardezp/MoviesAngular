import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenreIndexComponent } from './genre-index/genre-index.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateCinemaComponent } from './cinemas/create-cinema/create-cinema.component';
import { IndexCinemaComponent } from './cinemas/index-cinema/index-cinema.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditCinemaComponent } from './cinemas/edit-cinema/edit-cinema.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { FilterMovieComponent } from './movies/filter-movie/filter-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    GenreIndexComponent,
    CreateGenreComponent,
    IndexActorComponent,
    CreateActorComponent,
    CreateMovieComponent,
    CreateCinemaComponent,
    IndexCinemaComponent,
    EditActorComponent,
    EditGenreComponent,
    EditCinemaComponent,
    EditMovieComponent,
    FormGenreComponent,
    FilterMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
