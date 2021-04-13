import { Component, OnInit } from '@angular/core';
import { CinemaCreateDTO, CinemaModelDTO } from '../cinema.model';

@Component({
  selector: 'app-edit-cinema',
  templateUrl: './edit-cinema.component.html',
  styleUrls: ['./edit-cinema.component.css']
})
export class EditCinemaComponent implements OnInit {

  constructor() { }

  cinemaModel: CinemaModelDTO = {cinemaName: 'Apodaca Cinema', latitude: 25.780665039465145, longitude: -100.10591983795167};

  ngOnInit(): void {
  }

  saveChanges(cinema: CinemaCreateDTO): void {
    console.log(cinema);
  }

}
