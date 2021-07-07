import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { UserDto } from '../security.model';
import { SecurityService } from '../security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {

  @ViewChild('table') table: MatTable<any>;
  users: UserDto[];
  columnsToShow = ['email', 'actions'];
  totalRecords;
  recordsToShow = 10;
  actualPage = 1;


  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.getRecords(this.actualPage, this.recordsToShow);
  }

  getRecords(currentPage: number, recordsPage: number): void {
    this.securityService.getUsers(currentPage, recordsPage).subscribe(
      (response: HttpResponse<UserDto[]>) => {
        this.users = response.body;
        this.totalRecords = response.headers.get('totalRecords');
      },
      (error) => console.error(error)
    );
  }

  updatePage(data: PageEvent): void {
    this.actualPage = data.pageIndex + 1;
    this.recordsToShow = data.pageSize;
    this.getRecords(this.actualPage, this.recordsToShow);
  }

  addClaim(userId: string): void {
    this.securityService.addClaim(userId).subscribe(() => {
      Swal.fire('Exitoso', 'La operación se ha realizado con éxito', 'success');
    });
  }

  removeClaim(userId: string): void {
    this.securityService.removeClaim(userId).subscribe(() => {
      Swal.fire('Exitoso', 'La operación se ha realizado con éxito', 'success');
    });
  }

}
