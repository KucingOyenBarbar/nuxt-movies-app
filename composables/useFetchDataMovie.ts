type Args = {
  baseUrl: string;
  endpoint: string;
  pageParams: number;
};

const useFetchDataMovie = async ({
  baseUrl,
  endpoint,
  pageParams = 1,
}: Args) => {
  const { data, error, pending, refresh } = await useLazyFetch<GetMovies[]>(
    `${baseUrl}/${endpoint}?page=${pageParams}`
  );

  return {
    data,
    error,
    pending,
    refresh,
  };
};

export default useFetchDataMovie;
