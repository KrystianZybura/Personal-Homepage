import { styled } from "styled-components";

const SpecialText = styled.span`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.font};
`;

export { SpecialText };
