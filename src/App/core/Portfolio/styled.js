import { css, styled } from "styled-components";

import { ReactComponent as Icon } from "./githubIcon.svg";

export const Heading = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 8px;
`;

export const GithubIcon = styled(Icon)`
  color: ${({ theme }) => theme.styles.primary};
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: normal;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: -30px;

  ${({ $isLoading, $isError }) =>
    ($isLoading || $isError) &&
    css`
      grid-template-columns: 1fr;
      place-items: center;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    grid-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    margin-top: -15px;
  }
`;
