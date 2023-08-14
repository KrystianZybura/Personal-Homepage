import { styled } from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin-top: 120px;
`;

const FooterEmail = styled.span`
  font-size: 32px;
  font-weight: 900;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterDescription = styled.p`
  max-width: 670px;
`;

const FooterSocialIcons = styled.div`
  display: flex;
  gap: 24px;
`;

export { StyledFooter, FooterEmail, FooterDescription, FooterSocialIcons };
