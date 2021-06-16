import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CinemaModelDTO } from '../cinema.model';
import { CinemasService } from '../cinemas.service';

@Component({
  selector: 'app-index-cinema',
  templateUrl: './index-cinema.component.html',
  styleUrls: ['./index-cinema.component.css']
})
export class IndexCinemaComponent implements OnInit {

  constructor(private cinemasService: CinemasService) {}

  cinemas: CinemaModelDTO[];
  columnsToShow = ['id', 'cinemaName', 'actions'];
  totalRecords: string;
  recordsToShow = 10;
  actualPage = 1;

  ngOnInit(): void {
    this.getCinemaRecords(this.actualPage, this.recordsToShow);
  }

  getCinemaRecords(currentPage: number, recordsPage: number): void {
    this.cinemasService.GetCinemas(currentPage, recordsPage).subscribe(
      (response: HttpResponse<CinemaModelDTO[]>) => {
        this.cinemas = response.body;
        console.log(response.headers.get('totalRecords'));
        this.totalRecords = response.headers.get('totalRecords');
      },
      (error) => console.error(error)
    );
  }

  updatePage(data: PageEvent): void {
    this.actualPage = data.pageIndex + 1;
    this.recordsToShow = data.pageSize;
    this.getCinemaRecords(this.actualPage, this.recordsToShow);
  }

  deleteCinema(id: number): void {
    this.cinemasService.DeleteCinema(id).subscribe(
      () => {
        this.getCinemaRecords(this.actualPage, this.recordsToShow);
      },
      (error) => console.error(error)
    );
  }
}
