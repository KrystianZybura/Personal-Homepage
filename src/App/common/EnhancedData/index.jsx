import { Description, Heading, Socials, Title } from "./styled";

const EnhancedData = ({ heading, title, description, socials }) => (
  <>
    <Heading>{heading}</Heading>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Socials>{socials}</Socials>
  </>
);

export default EnhancedData;
