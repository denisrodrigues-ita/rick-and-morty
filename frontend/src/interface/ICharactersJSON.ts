export interface CharacterArray {
  characters?: CharactersEntity[] | null;
}
export interface CharactersEntity {
  created: string;
  gender: string;
  id: number;
  image: string;
  location_name: string;
  location_url: string;
  name: string;
  origin_name: string;
  origin_url: string;
  species: string;
  status: string;
  type: string;
  url: string;
}
