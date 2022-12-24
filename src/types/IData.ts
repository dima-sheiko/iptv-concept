interface URL {
  url: string;
}

interface Item {
  type: string;
  title: string;
  imdb_rate: number;
  is_new?: boolean;
  country: string;
  year: number;
  length: number;
  num_seasons: number;
  min_age: number;
  genres: string[];
  poster: string;
  keyframe: string;
}

export interface IData {
  backgrounds: URL[];
  items: Item[];
}
