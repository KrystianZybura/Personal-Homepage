import Link from "../../../common/Link";
import { ReactComponent as EmailIcon } from "./emailIcon.svg";

const HireMe = () => (
  <Link buttonLink href="mailto:zybura.dev@gmail.com">
    <EmailIcon />
    Hire Me
  </Link>
);

export default HireMe;
