import { styled } from "styled-components";

import { ReactComponent as Facebook } from "./facebookLogo.svg";
import { ReactComponent as Github } from "./githubLogoAlt.svg";
import { ReactComponent as LinkedIn } from "./linkedInLogo.svg";

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 16px;
    margin-top: 24px;
  }
`;

const createIcon = (svg) => styled(svg)`
  width: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }
`;

export const FacebookIcon = createIcon(Facebook);
export const GithubIcon = createIcon(Github);
export const LinkedInIcon = createIcon(LinkedIn);
