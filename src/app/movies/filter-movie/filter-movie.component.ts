import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenreDto } from '../../genres/genre.model';
import { GenresService } from '../../genres/genres.service';
import { MovieModelDTO } from '../movie.model';
import { MoviesService } from '../movies.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.css'],
})
export class FilterMovieComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private genresService: GenresService,
    private moviesService: MoviesService
  ) {}

  form: FormGroup;
  listGenre: GenreDto[] = [];
  listMovie: MovieModelDTO[];
  actualPage = 1;
  recordsToShow = 10;
  totalRecords;

  formOriginal = {
    title: '',
    genreId: 0,
    moviesTheaters: false,
    comingSoon: false
  };

  ngOnInit(): void {
    this.genresService.GetGenres().subscribe(genres => {
      this.listGenre = genres;

      this.form = this.formBuilder.group(this.formOriginal);
      this.getParametersUrl();
      this.filterMovies(this.form.value);

      this.form.valueChanges.subscribe((values) => {
        this.filterMovies(values);
        this.setParametersUrl();
      });
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
    values.currentPage = this.actualPage;
    values.recordsPerPage = this.recordsToShow;
    this.moviesService.filter(values).subscribe(response => {
      this.listMovie = response.body;
      this.setParametersUrl();
      this.totalRecords = response.headers.get('totalRecords');
    });
  }

  clear(): void {
    this.form.patchValue(this.formOriginal);
  }

  updatePage(data: PageEvent): void {
    this.actualPage = data.pageIndex + 1;
    this.recordsToShow = data.pageSize;
    this.filterMovies(this.form.value);
  }
}
