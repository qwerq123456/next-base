import { useState } from "react";
import { ToggleButton } from "../atoms/buttons";
import styled from "styled-components";
import { ToggleContent } from "../atoms/texts";

interface ToggleProps {
  title_unfold: string;
  title_fold: string;
  content: string;
  onClickContent: () => void;
}
const StyledToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`
export const Toggle = ({ title_fold, title_unfold, content, onClickContent }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledToggleContainer>
      <ToggleButton src={isOpen ? title_unfold : title_fold} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <ToggleContent src={content} onClick={onClickContent} />}
    </StyledToggleContainer>
  )
}