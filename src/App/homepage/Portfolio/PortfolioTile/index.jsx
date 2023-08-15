import {
  LinkContainer,
  LinkDescription,
  Tile,
  TileDescription,
  TileLink,
  TileTitle,
} from "./styled";
import { useReposData } from "./useReposData";

const PortfolioTile = () => {
  const reposData = useReposData();

  return (
    <>
      {reposData.map(({ name, description, html_url, homepage }) => (
        <Tile key={name}>
          <TileTitle>{name}</TileTitle>
          <TileDescription>{description}</TileDescription>
          <LinkContainer>
            <LinkDescription>Demo:</LinkDescription>
            <TileLink rel="no-referrer" target="_blank" href={homepage}>
              https://link.demo.com
            </TileLink>
            <LinkDescription>Code:</LinkDescription>
            <TileLink rel="no-referrer" target="_blank" href={html_url}>
              https://link.code.com
            </TileLink>
          </LinkContainer>
        </Tile>
      ))}
    </>
  );
};

export default PortfolioTile;
