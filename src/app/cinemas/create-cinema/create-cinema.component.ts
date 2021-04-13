import { Component, OnInit } from '@angular/core';
import { CinemaCreateDTO } from '../cinema.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.css']
})
export class CreateCinemaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(cinema: CinemaCreateDTO): void {
    console.log(cinema);
    this.router.navigate(['/cines']);
  }
}
