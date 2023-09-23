import { LoadingAnimation, LoadingText, LoadingWrapper } from "./styled";

const Loading = () => (
  <LoadingWrapper>
    <LoadingText>Please wait, projects are being loaded...</LoadingText>
    <LoadingAnimation />
  </LoadingWrapper>
);

export default Loading;
