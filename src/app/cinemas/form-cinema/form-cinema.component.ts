import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordinate } from 'src/app/utilities/map/coordinate.model';
import { CinemaCreateDTO } from '../cinema.model';

@Component({
  selector: 'app-form-cinema',
  templateUrl: './form-cinema.component.html',
  styleUrls: ['./form-cinema.component.css']
})
export class FormCinemaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input() errors: string[] = [];

  @Input() cinemaModel: CinemaCreateDTO;

  @Output() saveChangesEvent: EventEmitter<CinemaCreateDTO> = new EventEmitter<CinemaCreateDTO>();

  form: FormGroup;

  initialCoordinate: Coordinate[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cinemaName: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }]
    });

    if (this.cinemaModel !== undefined) {
      this.form.patchValue(this.cinemaModel);
      this.initialCoordinate.push({
        latitude: this.cinemaModel.latitude,
        longitude: this.cinemaModel.longitude
      });
    }
  }

  selectedCoordinate(coordinate: Coordinate): void {
    this.form.patchValue(coordinate);
  }

  saveChanges(): void {
    this.saveChangesEvent.emit(this.form.value);
  }

}
