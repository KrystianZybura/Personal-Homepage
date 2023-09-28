import { css, styled } from "styled-components";

export const EnhancedDataWrapper = styled.div`
  max-width: 633px;
  display: flex;
  flex-flow: column wrap;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 16px;
  }

  ${({ $footer }) =>
    $footer &&
    css`
      margin-top: 48px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        gap: 12px;
        margin: 0;
      }
    `}

  ${({ $hero }) =>
    $hero &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        text-align: center;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        text-align: unset;
      }
    `}
`;

export const Title = styled.div`
  ${({ $hero }) =>
    $hero &&
    css`
      margin: -20px 0 3px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: -4px 0 4px;
      }
    `}
`;

export const Description = styled.article`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 19px;
    margin-right: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
    line-height: 24px;
    margin: 0;
  }

  ${({ $footer }) =>
    $footer &&
    css`
      max-width: 670px;
      margin: 0;
    `}
`;
