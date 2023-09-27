import { css, styled } from "styled-components";

import { ReactComponent as Logo } from "../../assets/github-logo.svg";

export const Heading = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 8px;
`;

export const GithubLogo = styled(Logo)`
  color: ${({ theme }) => theme.styles.primary};
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 32px;
  }
`;

export const Subtitle = styled.span`
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 17px;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: -30px;

  ${({ $status }) =>
    ($status === "loading" || $status === "error") &&
    css`
      grid-template-columns: 1fr;
      place-items: center;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    margin-top: -15px;
  }
`;
