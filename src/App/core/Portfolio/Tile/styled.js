import { styled } from "styled-components";

export const TileWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content;
  align-content: center;
  grid-gap: 24px;
  background: ${({ theme }) => theme.styles.sectionBackground};
  border: 6px solid ${({ theme }) => theme.styles.border};
  border-radius: 4px;
  padding: 56px;
  transition: border-color 0.3s;
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.styles.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.styles.secondBoxShadow};

  &:hover {
    border-color: ${({ theme }) => theme.styles.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    padding: 40px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 40px;
    font-size: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 16px;
    padding: 24px;
    line-height: 22px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.styles.primary};
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const Description = styled.div`
  align-self: flex-start;
  color: ${({ theme }) => theme.styles.fontSecondary};
`;

export const LinksContainer = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  color: ${({ theme }) => theme.styles.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const LinkTo = styled.dt`
  color: ${({ theme }) => theme.styles.fontSecondary};
`;

export const LinkWrapper = styled.dd`
  margin: 0;
`;
