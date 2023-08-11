import { Tile, TileTitle } from "./styled";
import { useReposData } from "./useReposData";

const PortfolioTile = () => {
  const reposData = useReposData();
  console.log(reposData);

  return (
    <Tile>
      <TileTitle>{reposData.name}</TileTitle>
    </Tile>
  );
};

export default PortfolioTile;
