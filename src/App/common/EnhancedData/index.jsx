import { Description, EnhancedDataWrapper, Heading, Title } from "./styled";

const EnhancedData = ({
  heading,
  title,
  description,
  socials,
  footer,
  hero,
}) => (
  <EnhancedDataWrapper $footer={footer}>
    <Heading>{heading}</Heading>
    <Title $hero={hero}>{title}</Title>
    <Description $footer={footer}>{description}</Description>
    {socials}
  </EnhancedDataWrapper>
);

export default EnhancedData;
