import {
  LinkContainer,
  LinkDescription,
  StyledTile,
  TileDescription,
  TileLink,
  TileTitle,
} from "./styled";
import { useReposData } from "./useReposData";

const Tile = () => {
  const reposData = useReposData();

  return (
    <>
      {reposData.repos.map(({ name, description, html_url, homepage }) => (
        <StyledTile key={name}>
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
        </StyledTile>
      ))}
    </>
  );
};

export default Tile;
