import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioSubTitle,
  PortfolioTitle,
} from "./styled";

const Portfolio = () => (
  <>
    <PortfolioHeader>
      <img src="github-logo.svg" alt="Github logo" />
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <PortfolioSubTitle>My recent projects</PortfolioSubTitle>
    </PortfolioHeader>
    <PortfolioContainer></PortfolioContainer>
  </>
);

export default Portfolio;
