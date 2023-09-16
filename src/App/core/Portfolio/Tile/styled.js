import { styled } from "styled-components";

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

  @media (max-width: 768px) {
    gap: 16px;
    padding: 24px;
    max-width: 100%;
  }
`;

const TileTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.styles.primary};
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

const TileDescription = styled.div`
  color: ${({ theme }) => theme.styles.fontSecondary};
`;

const TileLink = styled.a`
  color: ${({ theme }) => theme.styles.primary};
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  justify-self: start;
  padding-bottom: 2px;

  &:hover {
    filter: brightness(120%);
  }
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

const LinkDescription = styled.span`
  color: ${({ theme }) => theme.styles.fontSecondary};
`;

export {
  StyledTile,
  TileTitle,
  TileDescription,
  TileLink,
  LinkContainer,
  LinkDescription,
};
