import { Component, OnInit } from '@angular/core';
import { MovieCreateDTO, MovieModelDTO } from '../movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor() { }

  movie: MovieModelDTO;

  ngOnInit(): void {
  }

  saveChanges(movie: MovieCreateDTO): void {
    console.log(movie);
  }
}
