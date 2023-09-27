import { styled } from "styled-components";

export const SectionWrapper = styled.section`
  background: ${({ theme }) => theme.styles.sectionBackground};
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.styles.firstBoxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.styles.secondBoxShadow};
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
  }
`;

export const Title = styled.h2`
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

export const List = styled.ul`
  list-style-image: url(${({ $listStyleUrl }) => $listStyleUrl});
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 0;
  padding-left: 15px;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  padding-left: 8px;
`;
