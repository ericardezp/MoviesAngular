import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { MovieModelDTO } from '../movies/movie.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  moviesTheaters: MovieModelDTO[];
  comingSoon: MovieModelDTO[];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.moviesService.GetLandingPage().subscribe(landingPage => {
      this.moviesTheaters = landingPage.moviesTheaters;
      this.comingSoon = landingPage.comingSoon;
    });
  }

  eventDeleted(): void{
    this.loadData();
  }
}
