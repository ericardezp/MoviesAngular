import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorCreateDTO } from './actor.model';
import { dateFormatter } from '../utilities/helpers';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  private apiUrl: string = environment.apiUrl + 'actors';

  constructor(private httpClient: HttpClient) { }

  public AddActor(actorCreateDto: ActorCreateDTO) {
    const formData = this.formDataBuilder(actorCreateDto);
    return this.httpClient.post(this.apiUrl, formData);
  }

  private formDataBuilder(actorCreateDto: ActorCreateDTO): FormData {
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
