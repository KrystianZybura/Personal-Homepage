import { styled } from "styled-components";

const SwitchThemeContainer = styled.div`
  position: absolute;
  justify-self: end;
  align-self: flex-start;
  display: flex;
  place-items: center;
  gap: 12px;
`;

const SwitchThemeButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

export { SwitchThemeButton, SwitchThemeContainer };
