import { Heading } from "../Heading";
import { Description, EnhancedDataWrapper, Title } from "./styled";

const EnhancedData = ({
  heading,
  title,
  description,
  socials,
  footer,
  hero,
}) => (
  <EnhancedDataWrapper $hero={hero} $footer={footer}>
    <Heading>{heading}</Heading>
    <Title $hero={hero}>{title}</Title>
    <Description $footer={footer}>{description}</Description>
    {socials}
  </EnhancedDataWrapper>
);

export default EnhancedData;
