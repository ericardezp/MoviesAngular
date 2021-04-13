import { Component, OnInit } from '@angular/core';
import { MovieCreateDTO, MovieModelDTO } from '../movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor() { }

  movie: MovieModelDTO = {
    title: 'Buscando a Nemo',
    resume: '### Busncando a Nemo',
    moviesTheaters: true,
    trailer: 'https://www.imdb.com/video/vi2687214105?playlistId=tt0266543',
    releaseDate: new Date(2003, 4, 30),
    poster: 'https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  };

  ngOnInit(): void {
  }

  saveChanges(movie: MovieCreateDTO): void {
    console.log(movie);
  }
}
