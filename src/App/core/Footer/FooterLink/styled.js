import { styled } from "styled-components";

const StyledFooterLink = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export { StyledFooterLink };
