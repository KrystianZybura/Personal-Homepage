import { SpecialText } from "../SpecialText";
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
    <SpecialText>{heading}</SpecialText>
    <Title $hero={hero}>{title}</Title>
    <Description $footer={footer}>{description}</Description>
    {socials}
  </EnhancedDataWrapper>
);

export default EnhancedData;
