export const getFavoriteProgrammingLanguage = async () => {
  const data = await fetch("http://localhost:3000/api/favorite-language");
  const response = data.json();
  return response;
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
