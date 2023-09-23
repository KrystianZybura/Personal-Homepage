import { css, styled } from "styled-components";

export const Heading = styled.span`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.styles.fontSecondary};
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
