const fetchApi = () => {
  const res = fetch(import.meta.env.API, {
    credentials: "included",
  });
};

export default fetchApi;
