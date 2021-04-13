import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorCreateDTO, ActorModelDTO } from '../actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  actorModel: ActorModelDTO = {
    actorName: 'Tom Cruise',
    dateBirth: new Date(1962, 6, 3),
    photo: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg'
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
    });
  }

  saveChanges(actor: ActorCreateDTO): void {
    console.log(actor);
    this.router.navigate(['/actores']);
  }
}
