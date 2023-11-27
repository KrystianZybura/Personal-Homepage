import { useQuery } from "react-query";

import { Title } from "../../common/Title";
import Error from "./Error";
import Loading from "./Loading";
import Tile from "./Tile";
import { fetchReposData } from "./fetchReposData";
import { GithubIcon, Heading, Projects, Subtitle } from "./styled";

const Portfolio = ({ title, subtitle }) => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: repos,
  } = useQuery("repos", fetchReposData);

  return (
    <>
      <Heading>
        <GithubIcon />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <Projects $isLoading={isLoading} $isError={isError}>
        {isLoading && <Loading />}
        {isError && <Error />}
        {isSuccess && <Tile repos={repos} />}
      </Projects>
    </>
  );
};

export default Portfolio;
