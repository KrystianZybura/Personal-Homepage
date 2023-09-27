import { css, styled } from "styled-components";

export const EnhancedDataWrapper = styled.div`
  max-width: 633px;
  display: flex;
  flex-flow: column wrap;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 16px;
  }

  ${({ $footer }) =>
    $footer &&
    css`
      margin-top: 48px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 12px;
        margin: 0;
      }
    `}

  ${({ $hero }) =>
    $hero &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        text-align: unset;
      }
    `}
`;

export const Title = styled.div`
  ${({ $hero }) =>
    $hero &&
    css`
      margin: -20px 0 3px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: -4px 0 4px;
      }
    `}
`;

export const Description = styled.article`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 18px;
    margin-right: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
