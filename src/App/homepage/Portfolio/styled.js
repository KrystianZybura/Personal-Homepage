import { css, styled } from "styled-components";

const PortfolioHeader = styled.div`
  display: grid;
  place-items: center;
  margin: 72px 0 0 0;
  grid-gap: 8px;
`;

const PortfolioLogo = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 4px;
`;

const PortfolioTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
`;

const PortfolioSubTitle = styled.span`
  font-size: 20px;
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
`;

export {
  PortfolioProjects,
  PortfolioHeader,
  PortfolioLogo,
  PortfolioTitle,
  PortfolioSubTitle,
};
