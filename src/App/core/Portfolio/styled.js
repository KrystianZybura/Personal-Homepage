import { css, styled } from "styled-components";

import { ReactComponent as Logo } from "../../assets/github-logo.svg";

export const Heading = styled.div`
  display: grid;
  place-items: center;
  margin-top: 72px;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 48px;
  }
`;

export const GithubLogo = styled(Logo)`
  color: ${({ theme }) => theme.styles.primary};
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.span`
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 17px;
  }
`;

export const Projects = styled.div`
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
