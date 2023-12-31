import { css, styled } from "styled-components";

import { ReactComponent as Icon } from "./sunIcon.svg";

export const Button = styled.button`
  position: absolute;
  justify-self: end;
  align-self: flex-start;
  display: flex;
  place-items: center;
  gap: 12px;
  background: inherit;
  border: none;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Box = styled.span`
  display: flex;
  align-items: center;
  padding: 3px;
  border: 1px solid ${({ theme }) => theme.styles.fontSecondary};
  border-radius: 14px;
  height: 26px;
  width: 48px;
  background: ${({ theme }) => theme.styles.themeButtonBackground};
`;

export const IconWrapper = styled.span`
  display: flex;
  transition: transform 0.3s ease;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const SunIcon = styled(Icon)`
  color: ${({ theme }) => theme.styles.background};
  background-color: ${({ theme }) => theme.styles.sunIconBackground};
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50%;
`;
