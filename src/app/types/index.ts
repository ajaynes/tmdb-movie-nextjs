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
