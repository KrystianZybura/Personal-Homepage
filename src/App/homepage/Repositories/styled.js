import { styled } from "styled-components";

const RepositoriesHeader = styled.div`
  display: grid;
  place-items: center;
  margin-top: 72px;
`;

const RepositoriesTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
`;

const RepositoriesSubTitle = styled.span`
  font-size: 20px;
`;

const RepositoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

export {
  RepositoriesContainer,
  RepositoriesHeader,
  RepositoriesTitle,
  RepositoriesSubTitle,
};
