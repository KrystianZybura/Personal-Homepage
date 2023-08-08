import {
  RepositoriesContainer,
  RepositoriesHeader,
  RepositoriesSubTitle,
  RepositoriesTitle,
} from "./styled";

const Repositories = () => (
  <>
    <RepositoriesHeader>
      <img src="github-logo.svg" alt="Github logo" />
      <RepositoriesTitle>Portfolio</RepositoriesTitle>
      <RepositoriesSubTitle>My recent projects</RepositoriesSubTitle>
    </RepositoriesHeader>
    <RepositoriesContainer></RepositoriesContainer>
  </>
);

export default Repositories;
