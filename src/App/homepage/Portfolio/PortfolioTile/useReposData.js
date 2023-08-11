import axios from "axios";
import { useEffect, useState } from "react";

const useReposData = () => {
  const [reposData, setReposData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.github.com/users/krystianzybura/repos`,
      );

      setTimeout(() => {
        setReposData(response.data);
      }, 1000);
    })();
  }, []);

  return reposData;
};

export { useReposData };
