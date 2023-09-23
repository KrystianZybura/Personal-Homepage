import { ReactComponent as ErrorIcon } from "../../../assets/danger.svg";
import {
  EmergencyLink,
  ErrorHeading,
  ErrorMessage,
  ErrorWrapper,
} from "./styled";

const Error = () => (
  <ErrorWrapper>
    <ErrorIcon />
    <ErrorHeading>Ooops! Something went wrong...</ErrorHeading>
    <ErrorMessage>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </ErrorMessage>
    <EmergencyLink
      rel="no-referrer"
      target="_blank"
      href={"https://github.com/KrystianZybura"}
    >
      Go to Github
    </EmergencyLink>
  </ErrorWrapper>
);

export default Error;
