import { css, styled } from "styled-components";

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }

  ${({ $section }) =>
    $section &&
    css`
      padding-bottom: 15px;
      margin-bottom: 25px;
      border-bottom: 1px solid ${({ theme }) => theme.styles.border};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        padding-bottom: 12px;
        line-height: 22px;
      }
    `}
`;
