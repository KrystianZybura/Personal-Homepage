import Link from "../../../common/Link";
import { socials } from "./socials";
import { SocialsWrapper } from "./styled";

const Socials = () => (
  <SocialsWrapper>
    {socials.map(({ name, url, Icon }) => (
      <Link href={url} key={name}>
        <Icon />
      </Link>
    ))}
  </SocialsWrapper>
);

export default Socials;
