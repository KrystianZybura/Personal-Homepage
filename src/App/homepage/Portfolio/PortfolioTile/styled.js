import { styled } from "styled-components";

const Tile = styled.div`
  max-width: 592px;
  max-height: 322px;
  background: white;
  border: 6px solid #d1d5da4d;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0px -2px 50px 0px #090a3305;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TileTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const TileDescription = styled.div`
  max-width: 480px;
  font-size: 18px;
  color: ${({ theme }) => theme.font};
`;

const TileLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

const TileLink = styled.a`
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
`;

export { Tile, TileTitle, TileDescription, TileLink, TileLinks };
