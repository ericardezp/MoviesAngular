import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorModelDto, ActorDto, ActorMovieDto } from './actor.model';
import { dateFormatter } from '../utilities/helpers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  private apiUrl: string = environment.apiUrl + 'actors';

  constructor(private httpClient: HttpClient) { }

  public GetActors(currentPage: number, recordsPage: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('CurrentPage', currentPage.toString());
    httpParams = httpParams.append('recordsPerPage', recordsPage.toString());
    return this.httpClient.get<ActorDto[]>(this.apiUrl, {observe: 'response', params: httpParams });
  }

  public GetActorById(id: number): Observable<ActorDto> {
    return this.httpClient.get<ActorDto>(`${this.apiUrl}/${id}`);
  }

  public GetActorByName(actorName: string): Observable<ActorMovieDto[]> {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.httpClient.post<ActorMovieDto[]>(`${this.apiUrl}/searchByName`, JSON.stringify(actorName), {headers});
  }

  public AddActor(actorCreateDto: ActorModelDto): Observable<object> {
    const formData = this.formDataBuilder(actorCreateDto);
    return this.httpClient.post(this.apiUrl, formData);
  }

  public UpdateActor(id: number, actorModel: ActorModelDto): Observable<object> {
    const formData = this.formDataBuilder(actorModel);
    return this.httpClient.put(`${this.apiUrl}/${id}`, formData);
  }

  public DeleteActor(id: number): Observable<object> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  private formDataBuilder(actorCreateDto: ActorModelDto): FormData {
    const formData = new FormData();
    formData.append('actorName', actorCreateDto.actorName);
    if (actorCreateDto.biography) {
      formData.append('biography', actorCreateDto.biography);
    }

    if (actorCreateDto.dateBirth) {
      formData.append('dateBirth', dateFormatter(actorCreateDto.dateBirth));
    }

    if (actorCreateDto.photo) {
      formData.append('photo', actorCreateDto.photo);
    }

    return formData;
  }
}
