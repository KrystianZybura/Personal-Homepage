import { Tile, TileDescription, TileTitle } from "./styled";
import { useReposData } from "./useReposData";

const PortfolioTile = () => {
  const reposData = useReposData();

  return (
    <>
      {reposData.map(({ name, description }) => (
        <Tile key={name}>
          <TileTitle key={name}>{name}</TileTitle>
          <TileDescription key={name}>{description}</TileDescription>
        </Tile>
      ))}
    </>
  );
};

export default PortfolioTile;
