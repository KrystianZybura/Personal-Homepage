import { ReactComponent as EmailIcon } from "./emailIcon.svg";
import { StyledHireMe } from "./styled";

const HireMe = () => (
  <StyledHireMe href="mailto:zybura.dev@gmail.com">
    <EmailIcon />
    Hire Me
  </StyledHireMe>
);

export default HireMe;
