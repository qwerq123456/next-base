import styled from "styled-components";

interface ImageTextProps {
  src: string;
}

const StyledTeamTitleText = styled.img`
  height: 5.5vh;
  margin-top: 5vh;
`

export const SetlistTeamTitle = ({ src }: ImageTextProps) => {
  return (
    <StyledTeamTitleText src={src} />
  )
}

const StyledToggleContent = styled.img`
  padding-top : 3vh;
  width : 130vw;
`
interface ToggleContentType extends ImageTextProps {
  onClick: () => void;
}
export const ToggleContent = (props: ToggleContentType) => {
  return (
    <StyledToggleContent {...props} />
  );
}