import {
  Container,
  Description,
  Image,
  Introduction,
  StyledHeader,
} from "./styled";

const Header = ({ title }) => (
  <Container>
    <Image src="/image.png" alt="Krystian Żybura" />
    <div>
      <Introduction>THIS IS</Introduction>
      <StyledHeader>{title}</StyledHeader>
      <Description>
        I am a passionate Frontend Developer, looking for new job opportunities.
      </Description>
    </div>
  </Container>
);

export default Header;
