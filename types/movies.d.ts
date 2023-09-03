type GetMovies = {
  _id: string;
  title: string;
  type: string;
  posterImg: string;
  rating: number | string;
  url: string;
  qualityResolution: string;
  genres: string[];
};

type Movies = {
  _id: string;
  title: string;
  type: string;
  posterImg: string;
  quality: string;
  rating: number | string;
  releaseDate: string;
  duration: string;
  synopsis: string;
  trailerUrl: string;
  genres: string[];
  directors: string[];
  countries: string[];
  casts: string[];
};

type GetStreams = {
  provider: string;
  url: string;
  resolutions: string[];
};

type Genre = {
  parameter: string;
  name: string;
  numberOfContents: number;
  url: string;
};

type Country = {
  parameter: string;
  name: string;
  numberOfContents: number;
  url: string;
};
