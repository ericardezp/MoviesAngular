import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { MovieModelDTO } from '../movie.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CoordinateWithMessage } from '../../utilities/map/coordinate.model';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css'],
})
export class DetailsMovieComponent implements OnInit {
  movie: MovieModelDTO;
  releaseDate: Date;
  trailerUrl: SafeResourceUrl;
  coordinate: CoordinateWithMessage[] = [];
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.moviesService.GetMovieById(params.id).subscribe((movie) => {
        console.log(movie);
        this.movie = movie;
        this.releaseDate = new Date(this.movie.releaseDate);
        this.trailerUrl = this.generateYoutubeUrl(this.movie.trailer);
        this.coordinate = movie.cinemas.map((cinema) => {
          return {
            longitude: cinema.longitude,
            latitude: cinema.latitude,
            message: cinema.cinemaName,
          };
        });
      });
    });
  }

  private generateYoutubeUrl(url: any): SafeResourceUrl {
    if (!url) {
      return '';
    }

    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}
