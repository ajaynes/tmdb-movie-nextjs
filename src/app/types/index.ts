export type ListItem = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  name?: string;
  release_date?: string;
  vote_average?: number;
};

export type ListResponse = {
  results: ListItem[];
};

type Genres = {
  id: number;
  name: string;
};

type ProductionCompanies = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
type Cast = {
  adult: boolean;
  cast_id: 0;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

type Crew = {
  adult: boolean;
  credit_id: 0;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

type Credits = {
  cast: Cast[];
  crew: Crew[];
};

export type DetailItem = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: null | string;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_countries: ProductionCompanies[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
};

export type DetailResponse = {
  results: DetailItem[];
};

type ReviewAuthor = {
  name: string;
  username: string;
  avatar_path: string;
  rating: string;
};

type ReviewItem = {
  author: string;
  author_details: ReviewAuthor;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type ReviewResponse = {
  id: number;
  page: number;
  results: ReviewItem[];
  total_pages: number;
  total_results: number;
};

export type BaseItem = {
  id: string | number;
  poster_path?: string;
  title?: string;
  name?: string;
  vote_average?: number;
  release_date?: string;
};
