import Link from "../../../common/Link";
import {
  Description,
  LinkTo,
  LinkWrapper,
  LinksContainer,
  TileWrapper,
  Title,
} from "./styled";

const Tile = ({ repos }) =>
  repos.map(
    ({ name, description, html_url, homepage }) =>
      homepage && (
        <TileWrapper key={name}>
          <Title>
            {name[0].toUpperCase() + name.substring(1).replaceAll("-", " ")}
          </Title>
          <Description>{description}</Description>
          <LinksContainer>
            <LinkTo>Demo:</LinkTo>
            <LinkWrapper>
              <Link tile href={homepage}>
                {homepage}
              </Link>
            </LinkWrapper>
            <LinkTo>Code:</LinkTo>
            <LinkWrapper>
              <Link tile href={html_url}>
                {html_url}
              </Link>
            </LinkWrapper>
          </LinksContainer>
        </TileWrapper>
      ),
  );

export default Tile;
