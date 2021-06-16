import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor() { }
  @Input() movies;

  ngOnInit(): void {  }

  removeMovie(movieIndex: number): void {
    this.movies.splice(movieIndex, 1);
  }
}
