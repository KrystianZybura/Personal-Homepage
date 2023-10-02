import ButtonLink from "../../../common/ButtonLink";
import { ReactComponent as EmailIcon } from "./emailIcon.svg";

const HireMe = () => (
  <ButtonLink hireMe href="mailto:zybura.dev@gmail.com">
    <EmailIcon />
    Hire Me
  </ButtonLink>
);

export default HireMe;
