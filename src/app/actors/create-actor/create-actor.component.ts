import { Component, OnInit } from '@angular/core';
import { ActorCreateDTO } from '../actor.model';
import { Router } from '@angular/router';
import { ActorsService } from '../actors.service';
import { parserErrors } from '../../utilities/helpers';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {
  errors: string[] = [];
  constructor(private router: Router, private actorsService: ActorsService) { }

  ngOnInit(): void {
  }

  saveChanges(ActorCreateDto: ActorCreateDTO): void {
    this.actorsService.AddActor(ActorCreateDto)
    .subscribe(() => {
      this.router.navigate(['/actores']);
    },
    (error) => this.errors = parserErrors(error)
    );
  }
}
