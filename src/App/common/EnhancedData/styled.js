import { css, styled } from "styled-components";

export const EnhancedDataWrapper = styled.div`
  max-width: 633px;
  display: flex;
  flex-flow: column wrap;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
  }

  ${({ $footer }) =>
    $footer &&
    css`
      gap: 24px;
      margin-top: 48px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 12px;
        margin: 0;
      }
    `}
`;

export const Title = styled.div`
  ${({ $hero }) =>
    $hero &&
    css`
      margin: -20px 0 3px;
    `}
`;

export const Description = styled.article`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.styles.fontSecondary};

  ${({ $footer }) =>
    $footer &&
    css`
      max-width: 670px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 17px;
    line-height: 24px;
  }
`;
