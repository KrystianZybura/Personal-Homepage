import {
  DarkThemeStatus,
  ToggleThemeButton,
  ToggleThemeContainer,
} from "./styled";

const ToggleTheme = () => (
  <ToggleThemeContainer>
    <DarkThemeStatus>{`Dark mode off`}</DarkThemeStatus>
    <ToggleThemeButton>
      <img src="/light.svg" alt="toggle theme button" />
    </ToggleThemeButton>
  </ToggleThemeContainer>
);
export default ToggleTheme;
