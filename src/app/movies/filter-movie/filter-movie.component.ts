import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.css'],
})
export class FilterMovieComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  form: FormGroup;
  listGenre = [
    { genreId: 1, genreName: 'Acción' },
    { genreId: 2, genreName: 'Drama' },
    { genreId: 3, genreName: 'Comedia' },
    { genreId: 4, genreName: 'Suspenso' },
  ];

  listMovie = [
    {
      title: 'My Name Is Khan',
      releaseDate: new Date(2010, 1, 10),
      price: 1350.99,
      image:
        'https://m.media-amazon.com/images/M/MV5BMTUyMTA4NDYzMV5BMl5BanBnXkFtZTcwMjk5MzcxMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      genreId: [2, 3],
      moviesTheaters: false,
      comingSoon: true,
    },
    {
      title: 'Searching',
      releaseDate: new Date(2018, 7, 31),
      price: 1350.99,
      image:
        'https://m.media-amazon.com/images/M/MV5BMjIwOTA3NDI3MF5BMl5BanBnXkFtZTgwNzIzMzA5NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      genreId: [2, 4],
      moviesTheaters: false,
      comingSoon: false,
    },
    {
      title: 'Spider-Man Far From Home',
      releaseDate: new Date(2019, 6, 2),
      price: 1350.99,
      image:
        'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      genreId: [1],
      moviesTheaters: true,
      comingSoon: false,
    },
    {
      title: 'The Others',
      releaseDate: new Date(2001, 7, 10),
      price: 1350.99,
      image:
        'https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY268_CR0,0,182,268_AL_.jpg',
      genreId: [4],
      moviesTheaters: true,
      comingSoon: false,
    },
  ];

  listMoviesOriginal = this.listMovie;

  formOriginal = {
    title: '',
    genreId: 0,
    moviesTheaters: false,
    comingSoon: false
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formOriginal);
    this.getParametersUrl();
    this.filterMovies(this.form.value);

    this.form.valueChanges.subscribe((values) => {
      this.listMovie = this.listMoviesOriginal;
      this.filterMovies(values);
      this.setParametersUrl();
    });
  }

  private getParametersUrl(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const objectParams: any = {};

      if (params.title) {
        objectParams.title = params.title;
      }

      if (params.genreId) {
        objectParams.genreId = Number(params.genreId);
      }

      if (params.moviesTheaters) {
        objectParams.moviesTheaters = params.moviesTheaters;
      }

      if (params.comingSoon) {
        objectParams.comingSoon = params.comingSoon;
      }

      this.form.patchValue(objectParams);
    });
  }

  private setParametersUrl(): void {
    const queryStrings = [];

    const formValues = this.form.value;

    if (formValues.title) {
      queryStrings.push(`title=${formValues.title}`);
    }

    if (Number(formValues.genreId) !== 0) {
      queryStrings.push(`genreId=${formValues.genreId}`);
    }

    if (formValues.moviesTheaters) {
      queryStrings.push(`moviesTheaters=${formValues.moviesTheaters}`);
    }

    if (formValues.comingSoon) {
      queryStrings.push(`comingSoon=${formValues.comingSoon}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  filterMovies(values: any): void {
    if (values.title) {
      this.listMovie = this.listMovie.filter(
        movie => movie.title.indexOf(values.title) !== -1
      );
    }

    if (values.genreId !== 0) {
      this.listMovie = this.listMovie.filter(
        movie => movie.genreId.indexOf(values.genreId) !== -1
      );
    }

    if (values.moviesTheaters) {
      this.listMovie = this.listMovie.filter(movie => movie.moviesTheaters);
    }

    if (values.comingSoon) {
      this.listMovie = this.listMovie.filter(movie => movie.comingSoon);
    }
  }

  clear(): void {
    this.form.patchValue(this.formOriginal);
  }
}
