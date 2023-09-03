type GetSeries = {
  _id: string;
  title: string;
  type: string;
  posterImg: string;
  episode: number;
  rating: number | string;
  url: string;
  genres: string[];
};

type Series = {
  _id: string;
  title: string;
  type: string;
  posterImg: string;
  status: string;
  releaseDate: string;
  duration: string;
  synopsis: string;
  trailerUrl: string;
  genres: string[];
  directors: string[];
  countries: string[];
  casts: string[];
  seasons: [
    {
      season: number;
      totalEpisodes: number;
    }
  ];
};
