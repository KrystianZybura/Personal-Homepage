const REPOS_API_URL = "https://api.github.com/users/krystianzybura/repos";

export const fetchReposData = async () => {
  const response = await fetch(REPOS_API_URL);

  return await response.json();
};
