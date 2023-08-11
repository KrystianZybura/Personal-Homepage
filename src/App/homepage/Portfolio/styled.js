import { styled } from "styled-components";

const PortfolioHeader = styled.div`
  display: grid;
  place-items: center;
  margin-top: 72px;
`;

const PortfolioLogo = styled.div`
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
`;

const PortfolioSubTitle = styled.span`
  font-size: 20px;
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
`;

export {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioLogo,
  PortfolioTitle,
  PortfolioSubTitle,
};
