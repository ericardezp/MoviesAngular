import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenreIndexComponent } from './genres/genre-index/genre-index.component';
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
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { UploadImageComponent } from './utilities/upload-image/upload-image.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { FormCinemaComponent } from './cinemas/form-cinema/form-cinema.component';
import { MapComponent } from './utilities/map/map.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { AutocompleteActorComponent } from './actors/autocomplete-actor/autocomplete-actor.component';
import { ShowErrorsComponent } from './utilities/show-errors/show-errors.component';
import { DetailsMovieComponent } from './movies/details-movie/details-movie.component';
import { AuthorizationComponent } from './security/authorization/authorization.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { FormAuthenticationComponent } from './security/form-authentication/form-authentication.component';
import { SecurityInterceptorService } from './security/security-interceptor.service';
import { IndexUserComponent } from './security/index-user/index-user.component';

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
    FilterMovieComponent,
    FormActorComponent,
    UploadImageComponent,
    InputMarkdownComponent,
    FormCinemaComponent,
    MapComponent,
    FormMovieComponent,
    MultipleSelectorComponent,
    AutocompleteActorComponent,
    ShowErrorsComponent,
    DetailsMovieComponent,
    AuthorizationComponent,
    LoginComponent,
    RegisterComponent,
    FormAuthenticationComponent,
    IndexUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
