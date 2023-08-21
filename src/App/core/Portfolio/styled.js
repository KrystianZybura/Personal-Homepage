import { css, styled } from "styled-components";

const PortfolioHeader = styled.div`
  display: grid;
  place-items: center;
  margin-top: 72px;
  grid-gap: 8px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }
`;

const PortfolioLogo = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 4px;
`;

const PortfolioTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const PortfolioSubTitle = styled.span`
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

const PortfolioProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;

  ${({ $status }) =>
    ($status === "loading" || $status === "error") &&
    css`
      grid-template-columns: 1fr;
      place-items: center;
    `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export {
  PortfolioProjects,
  PortfolioHeader,
  PortfolioLogo,
  PortfolioTitle,
  PortfolioSubTitle,
};