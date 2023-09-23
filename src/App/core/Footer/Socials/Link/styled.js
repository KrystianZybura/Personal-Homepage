import { styled } from "styled-components";

export const StyledLink = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.styles.primary};
  }
`;
