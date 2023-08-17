import { ReactComponent as Logo } from "../../assets/github-logo.svg";
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
        <PortfolioLogo>
          <Logo />
        </PortfolioLogo>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
      </PortfolioHeader>
      <PortfolioProjects $status={status}>
        {status === "loading" ? <Loading /> : <Tile repos={repos} />}
      </PortfolioProjects>
    </>
  );
};

export default Portfolio;
