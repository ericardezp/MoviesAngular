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

  ngOnInit(): void {
    this.moviesService.GetLandingPage().subscribe(landingPage => {
      console.log(landingPage);
      this.moviesTheaters = landingPage.moviesTheaters;
      this.comingSoon = landingPage.comingSoon;
    });
  }
  moviesTheaters: MovieModelDTO[];
  comingSoon: MovieModelDTO[];

  title = 'Hola mundo de Angular';
}
