import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres/genres.service';

@Component({
  selector: 'app-genre-index',
  templateUrl: './genre-index.component.html',
  styleUrls: ['./genre-index.component.css'],
})
export class GenreIndexComponent implements OnInit {
  constructor(private genresService: GenresService) {}

  ngOnInit(): void {
    this.genresService.GetGenres().subscribe(
      (genresCatalog) => {
        console.log(genresCatalog);
      },
      (error) => console.error(error)
    );
  }
}
