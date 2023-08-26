import { styled } from "styled-components";

const StyledTile = styled.div`
  display: grid;
  grid-gap: 24px;
  justify-content: center;
  align-items: center;
  max-width: 592px;
  max-height: 322px;
  background: ${({ theme }) => theme.sectionBackground};
  border: 6px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  padding: 56px;
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.secondBoxShadow};

  @media (max-width: 768px) {
    grid-gap: 16px;
    padding: 24px;
    max-width: 100%;
    justify-content: start;
  }

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
  }
`;

const TileTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const TileDescription = styled.div`
  color: ${({ theme }) => theme.fontSecondary};
`;

const TileLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  justify-self: start;
  padding-bottom: 2px;

  &:hover {
    color: ${({ theme }) => theme.borderHover};
  }
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

const LinkDescription = styled.span`
  color: ${({ theme }) => theme.fontSecondary};
`;

export {
  StyledTile,
  TileTitle,
  TileDescription,
  TileLink,
  LinkContainer,
  LinkDescription,
};
