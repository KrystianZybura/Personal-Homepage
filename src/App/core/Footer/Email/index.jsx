import Link from "../../../common/Link";
import { email } from "../../../common/email";

const Email = () => (
  <Link email href={`mailto:${email}`}>
    {email}
  </Link>
);

export default Email;
