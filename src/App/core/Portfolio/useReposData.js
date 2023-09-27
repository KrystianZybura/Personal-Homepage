import axios from "axios";
import { useEffect, useState } from "react";

const REPOS_API_URL = "https://api.github.com/users/krystianzybura/repos";

const useReposData = () => {
  const [reposData, setReposData] = useState({
    status: "loading",
    repos: [],
  });

  useEffect(() => {
    const fetchReposData = async () => {
      try {
        const response = await axios.get(REPOS_API_URL);

        const repos = await response.data;

        setReposData({ status: "success", repos });
      } catch (error) {
        console.error(error);
        setReposData({ status: "error", repos: [] });
      }
    };

    setTimeout(fetchReposData, 31500);
  }, []);

  return reposData;
};

export { useReposData };
