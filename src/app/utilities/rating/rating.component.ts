import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SecurityService } from '../../security/security.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maxRating = 5;
  @Input() ratingSelected = 0;
  @Output() eventRated: EventEmitter<number> = new EventEmitter<number>();
  maxStars = [];
  userClick = false;
  previousRating;

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.maxStars = Array(this.maxRating).fill(0);
  }

  handlerMouseEnter(index: number): void {
    this.ratingSelected  = index + 1;
  }

  handlerMouseLeave(): void {
    if (this.previousRating !== 0) {
      this.ratingSelected = this.previousRating;
    } else {
      this.ratingSelected = 0;
    }
  }

  handlerRate(index: number): void {
    if (this.securityService.isLoggedIn()) {
      this.ratingSelected  = index + 1;
      this.userClick = true;
      this.previousRating = this.ratingSelected;
      this.eventRated.emit(this.ratingSelected);
    } else {
      Swal.fire('Debe iniciar sesión', 'No puede realizar esta acción', 'error');
    }
  }
}
