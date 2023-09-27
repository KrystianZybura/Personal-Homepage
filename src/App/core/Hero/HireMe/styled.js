import { styled } from "styled-components";

export const StyledHireMe = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
  max-width: 154px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.styles.border};
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  background-color: ${({ theme }) => theme.styles.primary};
  color: #fff;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
    font-size: 18px;
    max-width: 139px;
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
    font-size: 18px;
    max-width: 139px;
    align-self: unset;
  }

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow};
  }
`;
