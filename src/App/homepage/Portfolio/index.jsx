import { ReactComponent as Logo } from "../../assets/github-logo.svg";
import Tile from "./Tile";
import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioLogo,
  PortfolioSubTitle,
  PortfolioTitle,
} from "./styled";

const Portfolio = () => {
  return (
    <>
      <PortfolioHeader>
        <PortfolioLogo>
          <Logo />
        </PortfolioLogo>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
      </PortfolioHeader>
      <PortfolioContainer>
        <Tile />
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
