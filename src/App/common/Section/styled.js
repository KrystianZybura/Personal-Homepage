import { styled } from "styled-components";

import { ReactComponent as BulletImage } from "./bulletImage.svg";

export const SectionWrapper = styled.section`
  background: ${({ theme }) => theme.styles.sectionBackground};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 16px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.styles.fontSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  display: inline-flex;
  place-items: center;
  gap: 15px;
`;

export const Bullet = styled(BulletImage)`
  color: ${({ theme }) => theme.styles.primary};
  flex-shrink: 0;
`;
