import ButtonLink from "../../../common/ButtonLink";
import { ErrorHeading, ErrorIcon, ErrorMessage, ErrorWrapper } from "./styled";

const Error = () => (
  <ErrorWrapper>
    <ErrorIcon />
    <ErrorHeading>Ooops! Something went wrong...</ErrorHeading>
    <ErrorMessage>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </ErrorMessage>
    <ButtonLink emergencyLink href={"https://github.com/KrystianZybura"}>
      Go to Github
    </ButtonLink>
  </ErrorWrapper>
);

export default Error;
