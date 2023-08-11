import { Tile, TileTitle } from "./styled";
import { useReposData } from "./useReposData";

const PortfolioTile = () => {
  const reposData = useReposData();

  return (
    <>
      {reposData.map(({ name }) => (
        <Tile key={name}>
          <TileTitle key={name}>{name}</TileTitle>
        </Tile>
      ))}
    </>
  );
};

export default PortfolioTile;
