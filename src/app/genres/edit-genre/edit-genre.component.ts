import { Component, OnInit } from '@angular/core';
import { GenreModelDTO } from '../genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private router: Router) { }

  genreModel: GenreModelDTO = {genreName: 'Acción'};

  ngOnInit(): void {
  }

  saveChanges(genreDTO: GenreModelDTO): void {
    // ... guardar cambios
    console.log(genreDTO);
    this.router.navigate(['/generos']);
  }
}
