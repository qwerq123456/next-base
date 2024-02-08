import { styled } from "styled-components";
import { IMAGE_PATH } from "@/constants";

export const StyledHomeTemplate = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${IMAGE_PATH.home_bg});
  background-size: cover;
  background-position: center;
`;

interface HomeTemplateProps {
  children: React.ReactNode;
}


export const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return (
    <StyledHomeTemplate>
      {children}
    </StyledHomeTemplate>
  )
}