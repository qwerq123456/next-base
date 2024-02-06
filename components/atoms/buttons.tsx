import { Button } from "@mui/base";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const StyledBackButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

interface BackButtonProps {
  onClick: () => void;
}
export const BackButton = (props: BackButtonProps) => {
  return (
    <StyledBackButton onClick={props.onClick}>
      <ArrowBackIosNewIcon />
    </StyledBackButton>
  )
}



export default BackButton;
