import ButtonLink from "../../../common/ButtonLink";
import { email } from "../../../common/email";
import { ReactComponent as EmailIcon } from "./emailIcon.svg";

const HireMe = () => (
  <ButtonLink hireMe href={`mailto:${email}`}>
    <EmailIcon />
    Hire Me
  </ButtonLink>
);

export default HireMe;
