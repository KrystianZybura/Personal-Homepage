import { ReactComponent as Facebook } from "./icons/facebookIcon.svg";
import { ReactComponent as Github } from "./icons/githubIcon.svg";
import { ReactComponent as LinkedIn } from "./icons/linkedInIcon.svg";
import { styleIcon } from "./styled";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/KrystianZybura",
    Icon: styleIcon(Github),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/168299279807k",
    Icon: styleIcon(Facebook),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/krystian-zybura/",
    Icon: styleIcon(LinkedIn),
  },
];
