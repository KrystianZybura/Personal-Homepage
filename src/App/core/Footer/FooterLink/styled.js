import { styled } from "styled-components";

export const StyledFooterLink = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.styles.primary};
  }
`;
