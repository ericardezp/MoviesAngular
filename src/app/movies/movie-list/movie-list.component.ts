import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieModelDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  @Input() movies: MovieModelDTO[];
  @Output() eventDeleted: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  deleteMovie(movieId: number): void {
    this.moviesService.DeleteMovie(movieId).subscribe(() => this.eventDeleted.emit());
  }
}
