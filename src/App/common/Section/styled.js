import { styled } from "styled-components";

export const SectionWrapper = styled.section`
  background: ${({ theme }) => theme.styles.sectionBackground};
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.styles.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.styles.secondBoxShadow};
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.styles.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 12px;
    font-size: 18px;
    margin-bottom: 25px;
  }
`;

export const SectionUl = styled.ul`
  list-style-image: url(${({ $listStyleUrl }) => $listStyleUrl});
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 0;
  padding-left: 15px;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionLi = styled.li`
  padding-left: 8px;
`;
