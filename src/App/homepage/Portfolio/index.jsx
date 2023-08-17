import { ReactComponent as Logo } from "../../assets/github-logo.svg";
import Loading from "./Loading";
import Tile from "./Tile";
import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioLogo,
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
      <PortfolioContainer $status={status}>
        {status === "loading" ? <Loading /> : <Tile repos={repos} />}
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
