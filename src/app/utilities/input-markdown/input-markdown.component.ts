import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input() markDownContent = '';

  @Input() placeHolderTextArea = 'Text';

  @Output() changeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  inputTextArea(event: any): void {
    const textValue = event.target.value;
    this.markDownContent = textValue;
    this.changeEvent.emit(textValue);
  }

  changeValue(event: any): void {
    this.changeEvent.emit(event.target.value);
  }
}
