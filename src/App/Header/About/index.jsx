import { Description, Image, Introduction, Title } from "./styled";

const About = ({ name }) => (
  <>
    <Image src="/image.png" alt={name} />
    <div>
      <Introduction>THIS IS</Introduction>
      <Title>{name}</Title>
      <Description>
        I am a passionate Frontend Developer, looking for new job opportunities.
      </Description>
    </div>
  </>
);

export default About;
