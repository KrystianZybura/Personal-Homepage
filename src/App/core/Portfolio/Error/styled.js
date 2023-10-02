import { styled } from "styled-components";

import { ReactComponent as icon } from "./dangerIcon.svg";

export const ErrorWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 32px;
  text-align: center;
  margin: 60px 0 68px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 20px 0 20px;
    grid-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0;
    grid-gap: 16px;
  }
`;

export const ErrorHeading = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: unset;
  }
`;

export const ErrorIcon = styled(icon)`
  color: ${({ theme }) => theme.styles.font};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 30px;
  }
`;
