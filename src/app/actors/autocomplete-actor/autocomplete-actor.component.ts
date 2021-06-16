import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { ActorMovieDto } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-autocomplete-actor',
  templateUrl: './autocomplete-actor.component.html',
  styleUrls: ['./autocomplete-actor.component.css'],
})
export class AutocompleteActorComponent implements OnInit {
  constructor(private actorsService: ActorsService) {}

  @Input() actorsSelected: ActorMovieDto[] = [];
  @ViewChild(MatTable) table: MatTable<any>;

  textControl: FormControl = new FormControl();
  displayedColumns = ['photo', 'actorName', 'character', 'actions'];
  actorsToShow: ActorMovieDto[] = [];


  ngOnInit(): void {
    this.textControl.valueChanges.subscribe((actorName) => {
      this.actorsService.GetActorByName(actorName).subscribe(actors => {
        this.actorsToShow = actors;
      });
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value);
    this.actorsSelected.push(event.option.value);
    this.textControl.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  deleteElement(actor): void{
    const index = this.actorsSelected.findIndex(item => item.actorName === actor.actorName);
    this.actorsSelected.splice(index, 1);
    this.table.renderRows();
  }

  dragDropRow(event: CdkDragDrop<any[]>): void {
    const previousIndex = this.actorsSelected.findIndex(
      actor => actor === event.item.data
    );
    moveItemInArray(this.actorsSelected, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
