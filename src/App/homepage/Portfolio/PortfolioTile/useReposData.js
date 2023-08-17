import axios from "axios";
import { useEffect, useState } from "react";

const useReposData = () => {
  const [reposData, setReposData] = useState({
    status: "loading",
    repos: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/krystianzybura/repos`,
        );

        setTimeout(() => {
          setReposData({ status: "success", repos: response.data });
        }, 1000);
      } catch (error) {
        console.error(error);
        setReposData({ status: "error", repos: [] });
      }
    })();
  }, []);

  return reposData;
};

export { useReposData };
