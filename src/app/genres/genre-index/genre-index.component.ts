import { Component, OnInit, ViewChild } from '@angular/core';
import { GenresService } from '../genres.service';
import { GenreDto } from '../genre.model';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-genre-index',
  templateUrl: './genre-index.component.html',
  styleUrls: ['./genre-index.component.css'],
})
export class GenreIndexComponent implements OnInit {
  constructor(private genresService: GenresService) {}

  @ViewChild('table')
  table: MatTable<any>;

  genres: GenreDto[];
  columnsToShow = ['id', 'genreName', 'actions'];
  totalRecords;
  recordsToShow = 10;
  actualPage = 1;

  ngOnInit(): void {
    this.getGenreRecords(this.actualPage, this.recordsToShow);
  }

  getGenreRecords(currentPage: number, recordsPage: number): void {
    this.genresService.GetPaginate(currentPage, recordsPage).subscribe(
      (response: HttpResponse<GenreDto[]>) => {
        this.genres = response.body;
        console.log(response.headers.get('totalRecords'));
        this.totalRecords = response.headers.get('totalRecords');
      },
      (error) => console.error(error)
    );
  }

  updatePage(data: PageEvent): void {
    this.actualPage = data.pageIndex + 1;
    this.recordsToShow = data.pageSize;
    this.getGenreRecords(this.actualPage, this.recordsToShow);
  }

  deleteGenre(id: number): void {
    this.genresService.DeleteGenre(id).subscribe(
      () => {
        this.getGenreRecords(this.actualPage, this.recordsToShow);
      },
      (error) => console.error(error)
    );
  }
}
