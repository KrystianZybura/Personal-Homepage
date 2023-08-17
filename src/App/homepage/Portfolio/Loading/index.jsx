import { LoadingAnimation, LoadingContainer, LoadingText } from "./styled";

const Loading = () => (
  <LoadingContainer>
    <LoadingText>Please wait, projects are being loaded...</LoadingText>
    <LoadingAnimation />
  </LoadingContainer>
);

export default Loading;
