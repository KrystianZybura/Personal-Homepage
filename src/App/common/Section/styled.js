import { styled } from "styled-components";

export const SectionWrapper = styled.section`
  background: ${({ theme }) => theme.styles.sectionBackground};
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.styles.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.styles.secondBoxShadow};
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 16px;
  }
`;

export const List = styled.ul`
  list-style-image: url(${({ $listStyleUrl }) => $listStyleUrl});
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 0;
  padding-left: 15px;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  padding-left: 8px;
`;
