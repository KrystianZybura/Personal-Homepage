import { styled } from "styled-components";

import { ReactComponent as Facebook } from "./icons/facebookLogo.svg";
import { ReactComponent as Github } from "./icons/githubLogoAlt.svg";
import { ReactComponent as LinkedIn } from "./icons/linkedInLogo.svg";

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 16px;
    margin-top: 24px;
  }
`;

const styleIcon = (icon) => styled(icon)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }
`;

export const FacebookIcon = styleIcon(Facebook);
export const GithubIcon = styleIcon(Github);
export const LinkedInIcon = styleIcon(LinkedIn);
