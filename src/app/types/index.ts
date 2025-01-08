export type ListItem = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  name?: string;
};

export type ListResponse = {
  results: ListItem[];
};
