import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parserErrors } from 'src/app/utilities/helpers';
import { ActorModelDto, ActorDto } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(
    private router: Router,
    private actorsService: ActorsService,
    private activatedRoute: ActivatedRoute
  ) {}

  actorModel: ActorDto;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.actorsService.GetActorById(params.id).subscribe(
        (actorDto) => {
          this.actorModel = actorDto;
        },
        () => this.router.navigate(['/generos'])
      );
    });
  }

  saveChanges(actorDto: ActorModelDto): void {
    this.actorsService.UpdateActor(this.actorModel.id, actorDto).subscribe(
      () => {
        this.router.navigate(['/actores']);
      },
      (error) => {
        this.errors = parserErrors(error);
      }
    );
  }
}
