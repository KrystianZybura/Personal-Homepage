import { Tile, TileTitle } from "./styled";
import { useReposData } from "./useReposData";

const PortfolioTile = () => {
  const repoData = useReposData();
  console.log(repoData.name);

  return (
    <Tile>
      <TileTitle>{repoData.name}</TileTitle>
    </Tile>
  );
};

export default PortfolioTile;
