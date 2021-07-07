import { Injectable } from '@angular/core';
import { ResponseAuthentication, UserData, UserDto } from './security.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private apiUrl: string = environment.apiUrl + 'account';
  private readonly keyToken = 'token';
  private readonly keyExpiration = 'token-expiration';
  private readonly keyRole = 'role';

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getUsers(currentPage: number, recordsPage: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('CurrentPage', currentPage.toString());
    httpParams = httpParams.append('recordsPerPage', recordsPage.toString());
    return this.httpClient.get<UserDto[]>(this.apiUrl, {observe: 'response', params: httpParams})
  }

  public addClaim(userId: string): Observable<object> {
    const httpHeaders = new HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.apiUrl}/AddClaim`, JSON.stringify(userId), {headers: httpHeaders});
  }

  public removeClaim(userId: string): Observable<object> {
    const httpHeaders = new HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.apiUrl}/RemoveClaim`, JSON.stringify(userId), {headers: httpHeaders});
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem(this.keyToken);
    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.keyExpiration);
    const expirationDate = new Date(expiration);
    if (expirationDate <= new Date()) {
      this.logoutUser();
      return false;
    }

    return true;
  }

  public getRole(): string {
    return this.getItemToken(this.keyRole);
  }

  getItemToken(item: string): string {
    const token = localStorage.getItem(this.keyToken);
    if (!token) {
      return '';
    }
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[item];
  }

  public loginUser(userData: UserData): Observable<ResponseAuthentication> {
    return this.httpClient.post<ResponseAuthentication>(this.apiUrl + '/singin', userData);
  }

  public logoutUser(): void {
    localStorage.removeItem(this.keyToken);
    localStorage.removeItem(this.keyExpiration);
    this.router.navigate(['/']);
  }

  public registerUser(userData: UserData): Observable<ResponseAuthentication> {
    return this.httpClient.post<ResponseAuthentication>(this.apiUrl + '/signup', userData);
  }

  public setTokenData(responseAuthentication: ResponseAuthentication): void {
    localStorage.setItem(this.keyToken, responseAuthentication.token);
    localStorage.setItem(this.keyExpiration, responseAuthentication.expirationDate.toString());
  }

  public getToken(): string {
    return localStorage.getItem(this.keyToken);
  }
}
