export interface CinemaModelDTO {
  id: number;
  cinemaName: string;
  latitude: number;
  longitude: number;
}

export interface CinemaCreateDTO {
  cinemaName: string;
  latitude: number;
  longitude: number;
}
