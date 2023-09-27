import { styled } from "styled-components";

export const StyledEmail = styled.a`
  font-size: 32px;
  font-weight: 900;
  justify-self: start;
  text-decoration: none;
  color: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.styles.primary};
  }
`;
