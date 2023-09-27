import { styled } from "styled-components";

export const TileWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content;
  grid-gap: 24px;
  background: ${({ theme }) => theme.styles.sectionBackground};
  border: 6px solid ${({ theme }) => theme.styles.border};
  border-radius: 4px;
  padding: 56px;
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.styles.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.styles.secondBoxShadow};

  &:hover {
    border-color: ${({ theme }) => theme.styles.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
    padding: 24px;
    max-width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.styles.primary};
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const Description = styled.div`
  align-self: flex-start;
  color: ${({ theme }) => theme.styles.fontSecondary};
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-self: end;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.styles.primary};
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  justify-self: start;
  padding-bottom: 2px;

  &:hover {
    filter: brightness(120%);
  }
`;

export const LinkDescription = styled.span`
  color: ${({ theme }) => theme.styles.fontSecondary};
  align-self: center;
`;
