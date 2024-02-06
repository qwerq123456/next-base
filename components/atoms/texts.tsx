import styled from "styled-components";


interface TextProps {
  text: string;
}
const StyledHomeTitleText = styled.div`
  
`

export const StyledHomeTitle = ({ text }: TextProps) => {
  return (
    <StyledHomeTitleText>
      {text}
    </StyledHomeTitleText>
  )
}