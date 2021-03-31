import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreModelDTO } from '../genre.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent {
  constructor(private router: Router) {}

  saveChanges(genreDTO: GenreModelDTO): void {
    // ... guardar cambios
    console.log(genreDTO);
    this.router.navigate(['/generos']);
  }
}
