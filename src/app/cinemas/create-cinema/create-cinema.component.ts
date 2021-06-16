import { Component, OnInit } from '@angular/core';
import { CinemaCreateDTO } from '../cinema.model';
import { Router } from '@angular/router';
import { CinemasService } from '../cinemas.service';
import { parserErrors } from 'src/app/utilities/helpers';

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.css'],
})
export class CreateCinemaComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private cinemasService: CinemasService) {}

  ngOnInit(): void {}

  saveChanges(addCinemaDto: CinemaCreateDTO): void {
    this.cinemasService.AddCinema(addCinemaDto).subscribe(
      () => {
        this.router.navigate(['/cines']);
      },
      (error) => {
        this.errors = parserErrors(error);
      }
    );
  }
}
