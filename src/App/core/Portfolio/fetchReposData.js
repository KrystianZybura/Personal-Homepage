const REPOS_API_URL = "https://api.github.com/users/krystianzybura/repos";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchReposData = async () => {
  await wait(300);

  const response = await fetch(REPOS_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch repositories.");
  }

  return await response.json();
};
