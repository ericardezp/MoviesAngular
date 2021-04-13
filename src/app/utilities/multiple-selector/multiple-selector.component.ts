import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input() selectedItems: MultipleSelectorModel[] = [];

  @Input() catalogItems: MultipleSelectorModel[] = [];

  ngOnInit(): void {
  }

  selectItem(item: MultipleSelectorModel, index: number): void {
    this.selectedItems.push(item);
    this.catalogItems.splice(index, 1);
  }

  unselectItem(item: MultipleSelectorModel, index: number): void {
    this.catalogItems.push(item);
    this.selectedItems.splice(index, 1);
  }

  selectAll(): void {
    this.selectedItems.push(...this.catalogItems);
    this.catalogItems = [];
  }

  unselectAll(): void {
    this.catalogItems.push(...this.selectedItems);
    this.selectedItems = [];
  }
}
