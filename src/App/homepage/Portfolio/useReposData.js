import axios from "axios";
import { useEffect, useState } from "react";

const useReposData = () => {
  const [reposData, setReposData] = useState({
    status: "loading",
    repos: [],
  });

  useEffect(() => {
    const fetchReposData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/krystianzybura/repos`,
        );

        const repos = await response.data;

        setReposData({ status: "success", repos });
      } catch (error) {
        console.error(error);
        setReposData({ status: "error", repos: [] });
      }
    };

    setTimeout(fetchReposData, 1500);
  }, []);

  return reposData;
};

export { useReposData };
