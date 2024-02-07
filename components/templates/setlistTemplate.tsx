import { IMAGE_PATH } from "@/constants";
import styled from "styled-components";
import { BackButton } from "../atoms/buttons";

const StyledSetlistTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${IMAGE_PATH.setlist_bg});
  background-size: cover;
  background-position: center;
  overflow : auto;
  padding-bottom : 5vh;
`

interface SetlistTemplateProps {
  children: React.ReactNode;
}

export const SetlistTemplate = ({ children }: SetlistTemplateProps) => {
  return (
    <StyledSetlistTemplate>
      <BackButton />
      {children}
    </StyledSetlistTemplate>
  )
}