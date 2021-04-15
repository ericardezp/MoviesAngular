import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actor',
  templateUrl: './autocomplete-actor.component.html',
  styleUrls: ['./autocomplete-actor.component.css'],
})
export class AutocompleteActorComponent implements OnInit {
  constructor() {}

  textControl: FormControl = new FormControl();

  catalogActors = [
    {
      actorName: 'Tom Holland',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Tom Hanks',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Samuel L. Jackson',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Tuba Büyüküstün',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BM2NiODgyNzAtNjI0YS00MDU2LTg4ZGUtYzk4NDk2M2M3MmMwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY317_CR75,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Cansu Dere',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BOTlkMjU5MTUtNzE3Ny00ZWMxLThmZTUtZjFjOGVkM2JhNjBhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY317_CR50,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Meryem Uzerli',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BYTk2MTMzNzEtY2VlNS00NThmLWE1ZWMtOWFlMjQ4ZGMwMTM2XkEyXkFqcGdeQXVyMTEyODI3NTQ4._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Scarlett Johansson',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Christopher Reeve',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMjE1MDYwNjQxMF5BMl5BanBnXkFtZTcwNDE4NzU3MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Lynda Carter',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMTcwNDgxMDY1MV5BMl5BanBnXkFtZTgwMTYwMzI0NzM@._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Shah Rukh Khan',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY317_CR4,0,214,317_AL_.jpg',
    },
    {
      actorName: 'Kajol',
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMjIwMjQ5MTQ4N15BMl5BanBnXkFtZTgwOTIyMDU0OTE@._V1_UY317_CR5,0,214,317_AL_.jpg',
    },
  ];

  originalActors = this.catalogActors;

  selectedActors = [];

  displayedColumns = ['photo', 'actorName', 'character', 'actions'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.textControl.valueChanges.subscribe((value) => {
      this.catalogActors = this.originalActors;
      this.catalogActors = this.catalogActors.filter(
        (actor) => actor.actorName.indexOf(value) !== -1
      );
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.textControl.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  deleteElement(actor): void{
    const index = this.selectedActors.findIndex(item => item.actorName === actor.actorName);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }

  dragDropRow(event: CdkDragDrop<any[]>): void {
    const previousIndex = this.selectedActors.findIndex(
      actor => actor === event.item.data
    );
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
