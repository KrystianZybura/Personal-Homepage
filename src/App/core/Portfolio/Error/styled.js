import { styled } from "styled-components";

export const ErrorWrapper = styled.div`
  text-align: center;
  margin: 64px 0 140px;
`;

export const ErrorHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  line-height: 28px;
`;

export const EmergencyLink = styled.a`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.styles.border};
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  background-color: ${({ theme }) => theme.styles.primary};
  color: #fff;
  text-decoration: none;
  display: inline-block;
  max-width: 168px;

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.styles.buttonBoxShadow};
  }
`;
