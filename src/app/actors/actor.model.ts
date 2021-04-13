export interface ActorModelDTO {
  actorName: string;
  dateBirth: Date;
  photo: string;
}

export interface ActorCreateDTO {
  actorName: string;
  dateBirth: Date;
  photo: File;
}
