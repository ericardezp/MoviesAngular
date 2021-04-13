import { Component, OnInit } from '@angular/core';
import { ActorCreateDTO } from '../actor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(actor: ActorCreateDTO): void {
    console.log(actor);
    this.router.navigate(['/actores']);
  }
}
