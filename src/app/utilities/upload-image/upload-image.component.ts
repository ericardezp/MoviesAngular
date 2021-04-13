import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements OnInit {
  constructor() {}

  @Input() urlCurrentImage: string;
  @Output() fileSelectedEvent: EventEmitter<File> = new EventEmitter<File>();
  stringImage: string;

  ngOnInit(): void {}

  change(event: any): void {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file)
        .then((value: string) => (this.stringImage = value))
        .catch((error) => console.log(error));
      this.fileSelectedEvent.emit(file);
      this.urlCurrentImage = null;
    }
  }
}
