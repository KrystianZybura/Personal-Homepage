import {
  Description,
  Link,
  LinkContainer,
  LinkDescription,
  Title,
  Wrapper,
} from "./styled";

const Tile = ({ repos }) => (
  <>
    {repos.map(
      ({ name, description, html_url, homepage }) =>
        homepage && (
          <Wrapper key={name}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <LinkContainer>
              <LinkDescription>Demo:</LinkDescription>
              <Link rel="no-referrer" target="_blank" href={homepage}>
                https://link.demo.com
              </Link>
              <LinkDescription>Code:</LinkDescription>
              <Link rel="no-referrer" target="_blank" href={html_url}>
                https://link.code.com
              </Link>
            </LinkContainer>
          </Wrapper>
        ),
    )}
  </>
);

export default Tile;
