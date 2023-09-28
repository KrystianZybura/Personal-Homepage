import { styled } from "styled-components";

export const StyledEmail = styled.a`
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  color: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.styles.primary};
  }
`;
