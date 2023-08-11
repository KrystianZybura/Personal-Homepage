import { ReactComponent as Logo } from "../../assets/github-logo.svg";
import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioLogo,
  PortfolioSubTitle,
  PortfolioTitle,
} from "./styled";
import { useReposData } from "./useReposData";

const Portfolio = () => {
  const repoName = useReposData();
  return (
    <>
      <PortfolioHeader>
        <PortfolioLogo>
          <Logo />
        </PortfolioLogo>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
      </PortfolioHeader>
      <PortfolioContainer>{repoName}</PortfolioContainer>
    </>
  );
};

export default Portfolio;
