export const fetcher = (input: RequestInfo | URL, config?: RequestInit) => {

  return fetch(input, config)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
