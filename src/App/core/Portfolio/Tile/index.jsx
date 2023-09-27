import {
  Description,
  Link,
  LinkDescription,
  LinksContainer,
  TileWrapper,
  Title,
} from "./styled";

const Tile = ({ repos }) => (
  <>
    {repos.map(
      ({ name, description, html_url, homepage }) =>
        homepage && (
          <TileWrapper key={name}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <LinksContainer>
              <LinkDescription>Demo:</LinkDescription>
              <Link rel="no-referrer" target="_blank" href={homepage}>
                https://link.demo.com
              </Link>
              <LinkDescription>Code:</LinkDescription>
              <Link rel="no-referrer" target="_blank" href={html_url}>
                https://link.code.com
              </Link>
            </LinksContainer>
          </TileWrapper>
        ),
    )}
  </>
);

export default Tile;
