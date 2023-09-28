import Link from "../../../common/Link";
import {
  Description,
  LinkDescription,
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
            <LinkDescription>Demo:</LinkDescription>
            <Link tile href={homepage}>
              https://link.demo.com
            </Link>
            <LinkDescription>Code:</LinkDescription>
            <Link tile href={html_url}>
              https://link.code.com
            </Link>
          </LinksContainer>
        </TileWrapper>
      ),
  );

export default Tile;
