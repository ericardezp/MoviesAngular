import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { parserErrors } from 'src/app/utilities/helpers';
import { CinemaCreateDTO, CinemaModelDTO } from '../cinema.model';
import { CinemasService } from '../cinemas.service';

@Component({
  selector: 'app-edit-cinema',
  templateUrl: './edit-cinema.component.html',
  styleUrls: ['./edit-cinema.component.css']
})
export class EditCinemaComponent implements OnInit {

  constructor(
    private router: Router,
    private cinemasService: CinemasService,
    private activatedRoute: ActivatedRoute
  ) {}

  cinemaModel: CinemaModelDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cinemasService.GetCinemaById(params.id).subscribe(
        (cinemaDto) => {
          this.cinemaModel = cinemaDto;
        },
        () => this.router.navigate(['/cines'])
      );
    });
  }

  saveChanges(cinemaDto: CinemaCreateDTO): void {
    this.cinemasService.UpdateCinema(this.cinemaModel.id, cinemaDto).subscribe(
      () => {
        this.router.navigate(['/cines']);
      },
      (error) => {
        this.errors = parserErrors(error);
      }
    );
  }
}
