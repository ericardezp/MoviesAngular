import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  apiUrl = environment.apiUrl + 'rating';
  constructor(private httpClient: HttpClient) {}

  public rate(movieId: number, score: number): Observable<object> {
    return this.httpClient.post(this.apiUrl, { movieId, score });
  }
}
