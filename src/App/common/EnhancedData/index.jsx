import { Description, EnhancedDataWrapper, Heading } from "./styled";

const EnhancedData = ({ heading, title, description, socials, footer }) => (
  <EnhancedDataWrapper $footer={footer}>
    <Heading>{heading}</Heading>
    {title}
    <Description $footer={footer}>{description}</Description>
    {socials}
  </EnhancedDataWrapper>
);

export default EnhancedData;
