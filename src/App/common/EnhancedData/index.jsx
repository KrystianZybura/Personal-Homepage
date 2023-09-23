import { Description, Heading } from "./styled";

const EnhancedData = ({ heading, title, description, socials, footer }) => (
  <>
    <Heading>{heading}</Heading>
    {title}
    <Description $footer={footer}>{description}</Description>
    {socials}
  </>
);

export default EnhancedData;
