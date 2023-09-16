import Error from "./Error";
import Loading from "./Loading";
import Tile from "./Tile";
import {
  PortfolioHeader,
  PortfolioLogo,
  PortfolioProjects,
  PortfolioSubTitle,
  PortfolioTitle,
} from "./styled";
import { useReposData } from "./useReposData";

const Portfolio = () => {
  const { status, repos } = useReposData();

  return (
    <>
      <PortfolioHeader>
        <PortfolioLogo />
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
      </PortfolioHeader>
      <PortfolioProjects $status={status}>
        {status === "loading" && <Loading />}
        {status === "success" && <Tile repos={repos} />}
        {status === "error" && <Error />}
      </PortfolioProjects>
    </>
  );
};

export default Portfolio;
