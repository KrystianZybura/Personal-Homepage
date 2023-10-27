import { css, styled } from "styled-components";

export const StyledButtonLink = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.styles.border};
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  background-color: ${({ theme }) => theme.styles.primary};
  color: ${({ theme }) => theme.styles.fontWhite};
  transition: box-shadow 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow};
  }

  ${({ $hireMe }) =>
    $hireMe &&
    css`
      align-self: start;
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        gap: 12px;
        align-self: center;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        align-self: start;
      }
    `}

  ${({ $emergencyLink }) =>
    $emergencyLink &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        padding: 10px 14px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 16px;
        padding: 8px 12px;
      }
    `}
`;
