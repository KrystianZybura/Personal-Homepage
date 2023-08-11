import axios from "axios";
import { useEffect, useState } from "react";

const useReposData = () => {
  const [repoName, setRepoName] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.github.com/repos/krystianzybura/todo-list-react`,
      );

      setRepoName(await response.data.name);
    })();
  }, []);

  return repoName;
};

export { useReposData };
