import { Component, OnInit } from '@angular/core';
import { MovieCreateDTO } from '../movie.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movie: MovieCreateDTO): void {
    console.log(movie);
  }

}
