import { styled } from "styled-components";

const ErrorWrapper = styled.div`
  text-align: center;
  margin: 64px 0 140px;
`;

const ErrorHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

const ErrorMessage = styled.p`
  font-size: 20px;
  line-height: 28px;
`;

const ErrorLink = styled.a`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  text-decoration: none;
  display: inline-block;
  max-width: 168px;

  &:hover {
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.buttonBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.buttonBoxShadow};
  }
`;

export { ErrorWrapper, ErrorHeading, ErrorLink, ErrorMessage };
