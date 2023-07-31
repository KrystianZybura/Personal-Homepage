import { styled } from "styled-components";

const ToggleThemeContainer = styled.div`
  position: absolute;
  justify-self: end;
  align-self: flex-start;
  display: flex;
  place-items: center;
  gap: 12px;
`;

const ToggleThemeButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
`;

const DarkThemeStatus = styled.span`
  text-transform: uppercase;
`;

export { ToggleThemeButton, DarkThemeStatus, ToggleThemeContainer };
