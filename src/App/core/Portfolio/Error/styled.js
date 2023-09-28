import { styled } from "styled-components";

import { ReactComponent as icon } from "./dangerIcon.svg";

export const ErrorWrapper = styled.div`
  text-align: center;
  margin: 60px 0 68px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 20px 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0;
  }
`;

export const ErrorHeading = styled.h3`
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
  font-size: 20px;
  line-height: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: unset;
  }
`;

export const ErrorIcon = styled(icon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 30px;
  }
`;
