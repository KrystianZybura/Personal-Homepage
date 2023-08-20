import { styled } from "styled-components";

import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin: 120px 0 109px;

  @media (max-width: 767px) {
    grid-gap: 12px;
    margin: 48px 0 31px;
  }
`;

const FooterEmail = styled.a`
  font-size: 32px;
  font-weight: 900;
  justify-self: start;
  text-decoration: none;
  color: inherit;

  @media (max-width: 767px) {
    font-size: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterDescription = styled.p`
  max-width: 670px;
  margin: 0;
`;

const FooterSocialIcons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 767px) {
    gap: 16px;
    margin-top: 24px;
  }
`;

const FooterLink = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const createFooterIcon = (svg) => styled(svg)`
  width: 48px;

  @media (max-width: 767px) {
    width: 32px;
  }
`;

export {
  StyledFooter,
  FooterEmail,
  FooterDescription,
  FooterSocialIcons,
  FooterLink,
  createFooterIcon,
};

export const FacebookIcon = createFooterIcon(Facebook);
export const GithubIcon = createFooterIcon(Github);
export const LinkedInIcon = createFooterIcon(LinkedIn);
