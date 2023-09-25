import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  grid-gap: 24px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 12px;
  }
`;
