import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  grid-gap: 24px;
  margin: 120px 0 109px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 12px;
    margin: 48px 0 31px;
  }
`;
