import { styled } from "styled-components";

import { ReactComponent as icon } from "./dangerIcon.svg";

export const ErrorWrapper = styled.div`
  text-align: center;
  margin: 60px 0 68px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 20px 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;

export const ErrorHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  line-height: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: unset;
  }
`;

export const ErrorIcon = styled(icon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 30px;
  }
`;

export const EmergencyLink = styled.a`
  display: inline-block;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.styles.border};
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  background-color: ${({ theme }) => theme.styles.primary};
  color: #fff;
  text-decoration: none;
  max-width: 168px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
    padding: 10px 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: 8px 12px;
  }

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow};
  }
`;
