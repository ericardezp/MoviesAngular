import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActorDto } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actor',
  templateUrl: './index-actor.component.html',
  styleUrls: ['./index-actor.component.css']
})
export class IndexActorComponent implements OnInit {

  constructor(private actorsService: ActorsService) { }

  actors: ActorDto[];
  columnsToShow = ['id', 'actorName', 'actions'];
  totalRecords;
  recordsToShow = 10;
  actualPage = 1;

  ngOnInit(): void {
    this.getActorRecords(this.actualPage, this.recordsToShow);
  }

  getActorRecords(currentPage: number, recordsPage: number): void {
    this.actorsService.GetActors(currentPage, recordsPage).subscribe(
      (response: HttpResponse<ActorDto[]>) => {
        this.actors = response.body;
        console.log(response.headers.get('totalRecords'));
        this.totalRecords = response.headers.get('totalRecords');
      },
      (error) => console.error(error)
    );
  }

  updatePage(data: PageEvent): void {
    this.actualPage = data.pageIndex + 1;
    this.recordsToShow = data.pageSize;
    this.getActorRecords(this.actualPage, this.recordsToShow);
  }

  deleteActor(id: number): void {
    this.actorsService.DeleteActor(id).subscribe(
      () => {
        this.getActorRecords(this.actualPage, this.recordsToShow);
      },
      (error) => console.error(error)
    );
  }

}
