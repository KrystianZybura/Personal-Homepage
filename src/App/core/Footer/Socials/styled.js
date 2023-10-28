import { styled } from "styled-components";

export const SocialsWrapper = styled.address`
  display: flex;
  gap: 24px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 16px;
    margin-top: 24px;
  }
`;

export const styleIcon = (icon) => styled(icon)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }
`;
