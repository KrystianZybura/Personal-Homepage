import { Title } from "../../common/Title";
import Error from "./Error";
import Loading from "./Loading";
import Tile from "./Tile";
import { GithubLogo, Heading, Projects, Subtitle } from "./styled";
import { useReposData } from "./useReposData";

const Portfolio = ({ title, subtitle }) => {
  const { status, repos } = useReposData();

  return (
    <>
      <Heading>
        <GithubLogo />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <Projects $status={status}>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "success" && <Tile repos={repos} />}
      </Projects>
    </>
  );
};

export default Portfolio;
