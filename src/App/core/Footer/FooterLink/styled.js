import { styled } from "styled-components";

const StyledFooterLink = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.styles.primary};
  }
`;

export { StyledFooterLink };
