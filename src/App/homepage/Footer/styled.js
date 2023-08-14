import { styled } from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin-top: 120px;
`;

const FooterTitle = styled.span`
  font-size: 32px;
  font-weight: 900;
`;

const FooterDescription = styled.p`
  max-width: 670px;
`;

const FooterSocialIcons = styled.div`
  display: flex;
  gap: 24px;
`;

export { StyledFooter, FooterTitle, FooterDescription, FooterSocialIcons };
