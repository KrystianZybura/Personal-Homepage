import { css, styled } from "styled-components";

import { ReactComponent as DarkModeIcon } from "./darkMode.svg";
import { ReactComponent as LightModeIcon } from "./lightMode.svg";

export const SwitchThemeContainer = styled.div`
  position: absolute;
  justify-self: end;
  align-self: flex-start;
  display: flex;
  place-items: center;
  gap: 12px;
`;

export const SwitchThemeButton = styled.button`
  display: grid;
  align-content: center;
  padding: 3px;
  border: 1px solid ${({ theme }) => theme.styles.themeIconBackground};
  border-radius: 14px;
  height: 26px;
  width: 48px;
  background: ${({ theme }) => theme.styles.themeButtonBackground};
  cursor: pointer;

  &:focus-visible {
    outline-offset: 1px;
  }
`;

export const IconWrapper = styled.div`
  transition: transform 0.3s ease;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const createModeIcon = (svg) => styled(svg)`
  display: block;
  background-color: ${({ theme }) => theme.styles.themeIconBackground};
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50%;
`;

export const StyledLightModeIcon = createModeIcon(LightModeIcon);
export const StyledDarkModeIcon = createModeIcon(DarkModeIcon);
