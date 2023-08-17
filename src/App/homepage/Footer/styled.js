import { styled } from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin: 120px 0 109px;
`;

const FooterEmail = styled.a`
  font-size: 32px;
  font-weight: 900;
  justify-self: start;
  text-decoration: none;
  color: inherit;

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

const IconContainer = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export {
  StyledFooter,
  FooterEmail,
  FooterDescription,
  FooterSocialIcons,
  IconContainer,
};