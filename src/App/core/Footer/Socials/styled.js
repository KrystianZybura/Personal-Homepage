import { styled } from "styled-components";

import { ReactComponent as Facebook } from "../../../assets/facebook.svg";
import { ReactComponent as Github } from "../../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../../assets/linkedIn.svg";

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
    margin-top: 24px;
  }
`;

export const createIcon = (svg) => styled(svg)`
  width: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 32px;
  }
`;

export const FacebookIcon = createIcon(Facebook);
export const GithubIcon = createIcon(Github);
export const LinkedInIcon = createIcon(LinkedIn);
