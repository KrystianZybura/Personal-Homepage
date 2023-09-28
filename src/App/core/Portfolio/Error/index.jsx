import Link from "../../../common/Link";
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
    <Link buttonLink emergencyLink href={"https://github.com/KrystianZybura"}>
      Go to Github
    </Link>
  </ErrorWrapper>
);

export default Error;
