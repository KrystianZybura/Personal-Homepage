import axios from "axios";
import { useEffect, useState } from "react";

const useReposData = () => {
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.github.com/repos/krystianzybura/todo-list-react`,
      );
      const { name, description } = await response.data;
      setTimeout(() => {
        setRepoData({ name, description });
      }, 1000);
    })();
  }, []);

  return repoData;
};

export { useReposData };
