import { ReactComponent as Logo } from "../../assets/github-logo.svg";
import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioLogo,
  PortfolioSubTitle,
  PortfolioTitle,
} from "./styled";

const Portfolio = () => (
  <>
    <PortfolioHeader>
      <PortfolioLogo>
        <Logo />
      </PortfolioLogo>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
    </PortfolioHeader>
    <PortfolioContainer></PortfolioContainer>
  </>
);

export default Portfolio;
