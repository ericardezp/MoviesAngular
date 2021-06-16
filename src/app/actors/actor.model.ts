export interface ActorModelDto {
  actorName: string;
  dateBirth: Date;
  photo: File;
  biography: string;
}

export interface ActorDto {
  id: number;
  actorName: string;
  dateBirth: Date;
  photo: string;
  biography: string;
}

export interface ActorMovieDto {
  id: number;
  actorName: string;
  character: string;
  photo: string;
}
