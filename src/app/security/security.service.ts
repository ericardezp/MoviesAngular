import { Injectable } from '@angular/core';
import { ResponseAuthentication, UserData } from './security.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private apiUrl: string = environment.apiUrl + 'account';

  constructor(private httpClient: HttpClient) { }

  public isLoggedIn(): boolean {
    return true;
  }

  public getRole(): string {
    return 'Administrator';
  }

  public registerUser(userData: UserData): Observable<ResponseAuthentication> {
    return this.httpClient.post<ResponseAuthentication>(this.apiUrl + '/signup', userData);
  }
}
