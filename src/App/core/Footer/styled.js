import { styled } from "styled-components";

export const FooterWrapper = styled.footer`
  max-width: 633px;
  display: flex;
  flex-flow: column wrap;
  gap: 32px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 12px;
    margin: 0;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.styles.fontSecondary};
  max-width: 670px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
    line-height: 24px;
  }
`;
