import { useRouter } from "next/router";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
}

const StyledHomeButton = styled.img`
  height: 10vh;
`

interface ImageButtonProps extends ButtonProps {
  src: string;
}
export const HomeButton = ({ onClick, src }: ImageButtonProps) => {
  return (
    <StyledHomeButton src={src} onClick={onClick} />
  )
}

const StyledToggleButton = styled.img`
  height: 2vh;
  margin-top: 5vh;
`
export const ToggleButton = ({ onClick, src }: ImageButtonProps) => {
  return (
    <StyledToggleButton src={src} onClick={onClick} />
  )
}

const StyledBackButton = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width : 20vw;
`

export const BackButton = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  }
  return (
    <StyledBackButton src={"/assets/buttons/backspace.png"} onClick={goBack} />
  )
}