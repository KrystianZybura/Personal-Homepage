import { styled } from "styled-components";

const Tile = styled.div`
  max-width: 592px;
  max-height: 322px;
  background: white;
  border: 6px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  padding: 30px;
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.secondBoxShadow};
  display: grid;
  grid-gap: 24px;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
  }
`;

const TileTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0px;
`;

const TileDescription = styled.div`
  max-width: 480px;
  color: ${({ theme }) => theme.font};
`;

const TileLink = styled.a`
  color: ${({ theme }) => theme.primary};
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

const LinkDescription = styled.span`
  color: ${({ theme }) => theme.font};
`;

export {
  Tile,
  TileTitle,
  TileDescription,
  TileLink,
  LinkContainer,
  LinkDescription,
};
